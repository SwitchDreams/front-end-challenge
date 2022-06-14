import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios, { CancelTokenSource } from 'axios';
import { SmileyXEyes } from 'phosphor-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MultiselectDropdown } from 'sharingan-rn-modal-dropdown';

import { api } from '../../libs/api';
import { theme } from '../../theme';
import { CategoryType } from '../../util/categoryType';
import { ClassType } from '../../util/ClassInfoType';
import { myTheme } from '../../util/theme';
import { feedbackModal } from '../../util/utilFunctions';
import { ClassThumbnail } from '../ClassThumbnail';

import { styles } from './styles';


export function ClassIndex() {
  const [pageLoading, isPageLoading] = useState(true)
  const [classes, setClasses] = useState(null)
  const [errorLoading, isErrorLoading] = useState(false)
  const [categoryReqList, setCategoryList] = useState<{ label: string, value: number }[]>([])

  const [selectedCat, setSelectedCat] = useState<Array<number>>([])
  const [filteredClasses, setFilteredClasses] = useState<ClassType[]>();

  const navigation = useNavigation()

  let isActive = true
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  useFocusEffect(useCallback(() => {

    isActive = true
    fetchCategories();
    fetchClasses(source)

    return () => {
      isActive = false
      source.cancel()
    }

  }, []));

  function setCategoriesDD(categoriesList: CategoryType[]) {

    return categoriesList.map((category) => {
      return { label: category.name, value: category.id };
    });
  }

  function getFilteredClasses(categoriesIds: Array<number>) {

    if (categoriesIds.length === 0) {
      setFilteredClasses((classes as unknown) as ClassType[]);
    } else {

      setFilteredClasses(((classes as unknown) as ClassType[]).
        filter((c) => {
          return categoriesIds.includes(c.category_id);
        }));
    }
  }

  async function fetchClasses(source: CancelTokenSource) {

    try {

      if (isActive) {
        isErrorLoading(false)
        isPageLoading(true)
      }
      const response = await api.get('gym_classes', { cancelToken: source.token })

      if (isActive) {
        setClasses(response.data)
        setFilteredClasses(response.data);
      }
    } catch (error) {

      if (!axios.isCancel(error) && isActive) {
        Alert.alert("Erro", "Não foi possivel carregar os dados, tente novamente mais tarde")
        isErrorLoading(true);
      }
    }

    if (isActive)
      isPageLoading(false);
  }

  async function fetchCategories() {

    try {

      if (isActive) {
        isPageLoading(true);
      }
      const response = await api.get('/categories', { cancelToken: source.token });

      if (isActive) {
        setCategoryList(setCategoriesDD(response.data));
      }

    } catch (error) {

      if (!axios.isCancel(error) && isActive) {
        feedbackModal(false, () => { }, undefined, "Não foi possivel obter as categorias, tente mais tarde!");
      }
    }

    if (isActive) {
      isPageLoading(false);
    }
  }

  function renderItem(listItem: any) {
    const classData = listItem.item

    return (
      <TouchableOpacity style={styles.thumbContainer} onPress={() => navigation.navigate('Show' as never, { id: classData.id } as never)}>
        <ClassThumbnail
          className={classData.name}
          professorName={classData.teacher_name}
          startTime={classData.start_time}
          duration={classData.duration}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>

      {(errorLoading) &&
        <SmileyXEyes
          color={theme.color.line}
          size={theme.iconBigSize}
          weight={'regular'} />}

      {classes && (
        <FlatList
          refreshControl=
          {<RefreshControl
            refreshing={pageLoading}
            onRefresh={() => { fetchCategories(); fetchClasses(source) }}
          />}

          // extraData={undefined}

          ListHeaderComponent={
            // <View style={styles.input}>
            <MultiselectDropdown

              value={selectedCat}
              data={categoryReqList}

              label={"Filtrar por Categorias"}
              onChange={(selected) => {
                // console.log(selected);
                setSelectedCat(selected);
                getFilteredClasses(selected);
              }}

              paperTheme={myTheme}
              borderRadius={0}
              primaryColor={'white'}
              itemTextStyle={styles.textItem}

              hideChip={false}
              parentDDContainerStyle={styles.dropDown}
              selectedItemTextStyle={styles.textItem}

              chipTextStyle={styles.textItem}
            // chipStyle={{backgroundColor: theme.color.primary}}

            />
            // </View>
          }

          refreshing={pageLoading}
          ListEmptyComponent={<Text style={styles.message}>Sem aulas disponiveis</Text>}
          style={styles.scroll}
          contentContainerStyle={styles.contentScroll}
          data={filteredClasses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()
          }
        />
      )}

      {/* {pageLoading && <ActivityIndicator size={'large'} color={'white'} />} */}


    </View>
  );
}