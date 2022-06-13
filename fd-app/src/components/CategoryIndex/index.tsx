import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { api } from '../../libs/api';
import { CategoryType } from '../../util/categoryType';
import { CategoryThumb } from '../CategoryThumb';

import { styles } from './styles';

export function CategoryIndex() {
  const [categories, setCategories] = useState<CategoryType[] | undefined>(undefined)
  const [errorLoading, setError] = useState(false);
  const [haveItems, setHaveItems] = useState(false)
  const [pageLoading, isPageLoading] = useState(true)
  const [refresh, setRefresh] = useState(false);

  let screenActive = true;

  const navigation = useNavigation();

  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    async function fetchData() {

      try {

        if (screenActive) {
          isPageLoading(true);
          setHaveItems(false);
        }
        const response = await api.get('/categories', { cancelToken: source.token });

        if (screenActive) {
          setCategories(response.data);

          if (response.data == undefined) {
            setHaveItems(false);
          } else if ((response.data as []).length > 0) {
            setHaveItems(true);
          }
        }

      } catch (error) {

        if (!axios.isCancel(error)) {
          Alert.alert("Erro", "Não foi possível obter os dados da categoria, tente mais tarde!");

          if (screenActive) {
            setError(true);
            setHaveItems(false);
          }
        }
      }

      if (screenActive) {
        isPageLoading(false);
      }
    }

    fetchData();

    return () => {
      screenActive = false;
      source.cancel();
    }
  }, [refresh]);

  function renderItem(listItem: any) {
    const categoryData = listItem.item as CategoryType

    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.thumbContainer}
        onPress={() => navigation.navigate('ShowCategory' as never, { id: categoryData.id } as never)}
      >
        <CategoryThumb categoryName={categoryData.name}  description={categoryData.description}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>


      {!haveItems && !pageLoading && <Text style={styles.text}>Sem categorias!</Text>}
      <FlatList
        refreshControl=
        {<RefreshControl
          refreshing={pageLoading}
          onRefresh={() => { setRefresh((v) => !v) }}
        />}

        style={styles.scroll}
        contentContainerStyle={styles.contentScroll}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}