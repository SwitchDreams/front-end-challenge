import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { X } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { api } from '../../libs/api';
import { theme } from '../../theme';
import { CategoryType } from '../../util/categoryType';
import { feedbackModal } from '../../util/utilFunctions';
import { Button } from '../Button';
import { excludeCategory } from './apiCallFunctions';

import { styles } from './styles';

export function CategoryShow() {
  const [categoryData, setCategory] = useState<CategoryType | undefined>(undefined);
  const [pageLoading, isPageLoading] = useState(false);
  const [error, setError] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  let screenActive = true;

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source();

    async function fetchData() {

      try {
        if (screenActive) {
          isPageLoading(true);
        }

        const { id } = route.params as { id: number };
        const response = await api.get(`/categories/${id}`, { cancelToken: source.token });

        if (screenActive) {
          setCategory(response.data);
        }

      } catch (error) {
        if (!axios.isCancel(error)) {
          feedbackModal(false, () => { }, undefined, "Falha ao tentar obter categoria, tente mais tarde!");
          setError(true);
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
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.modal}>

        <TouchableOpacity style={styles.xButton} onPress={() => navigation.goBack()}>
          <X size={theme.iconSize} color={theme.color.icon} weight={'bold'} />
        </TouchableOpacity>

        {!pageLoading && !error &&
          <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContainer}>

            {/* <Text style={styles.title}>Categoria</Text> */}
            <Text style={styles.name}>{categoryData?.name}</Text>
            <Text style={styles.description}>{categoryData?.description}</Text>

            <Button
              style={styles.button}
              titleText={'Editar'}
              isLoading={false}
              onPress={() => {
                navigation.navigate('EditCategory' as never,
                  { category_id: categoryData?.id, editing: true } as never);
              }}
            />
            <Button
              style={styles.button}
              titleText={'Excluir'}
              isLoading={buttonLoading}

              onPress={async () => {

                setButtonLoading(true);
                feedbackModal(await excludeCategory(categoryData?.id as number),
                  () => {navigation.navigate('IndexCategory' as never)});
                setButtonLoading(false);
              }}

            />

          </ScrollView>
        }

        {error && <Text style={styles.error}>Erro! Não foi possível obter o dado da categoria</Text>}

      </View>
    </View>
  );
}