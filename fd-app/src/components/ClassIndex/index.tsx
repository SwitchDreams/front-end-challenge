import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios, { CancelTokenSource } from 'axios';
import { SmileyXEyes } from 'phosphor-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { api } from '../../libs/api';
import { theme } from '../../theme';
import { ClassType } from '../../util/ClassInfoType';
import { ClassThumbnail } from '../ClassThumbnail';

import { styles } from './styles';


export function ClassIndex() {
  const [pageLoading, isPageLoading] = useState(true)
  const [classes, setClasses] = useState(null)
  const [errorLoading, isErrorLoading] = useState(false)
  const [haveItems, setHaveItems] = useState(false)

  const navigation = useNavigation()

  let isActive = true
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  useFocusEffect(useCallback(() => {
    fetchClasses(source)
    isActive = true

    return () => {
      source.cancel()
      isActive = false
    }

  }, []))

  async function fetchClasses(source: CancelTokenSource) {

    if (isActive) {
      isErrorLoading(false)
      isPageLoading(true)
    }

    try {
      const response = await api.get('gym_classes', { cancelToken: source.token })

      if (isActive) {
        setClasses(response.data)

        if ((response.data as ClassType[]).length > 0) {
          setHaveItems(true)
        }
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

      {!pageLoading && !haveItems && <Text style={styles.message}>Sem aulas disponiveis</Text>}

      {classes && (
        <FlatList
          refreshControl=
          {<RefreshControl
            refreshing={false}
            onRefresh={() => { fetchClasses(source) }}
          />}
          style={styles.scroll}
          contentContainerStyle={styles.contentScroll}
          data={classes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()
          }
        />
      )}

      {pageLoading && <ActivityIndicator size={'large'} color={'white'} />}


    </View>
  );
}