import { SmileyXEyes } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { api } from '../../libs/api';
import { theme } from '../../theme';
import { ClassType } from '../../util/ClassInfoType';
import { ClassThumbnail } from '../ClassThumbnail';

import { styles } from './styles';

export function ClassIndex({ navigation }: any) {
  const [pageLoading, isPageLoading] = useState(true)
  const [classes, setClasses] = useState(null)
  const [errorLoading, isErrorLoading] = useState(false)
  const [haveItems, setHaveItems] = useState(false)

  useEffect(() => {
    fetchClasses()
  }, [])

  async function fetchClasses() {

    isErrorLoading(false)
    isPageLoading(true)
    setHaveItems(true)

    try {
      const response = await api.get('gym_classes')

      setClasses(response.data)
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel carregar os dados, tente novamente mais tarde")
      isErrorLoading(true)
    }

    isPageLoading(false)
  }

  function renderItem(listItem: any) {
    const classData = listItem.item

    // setHaveItems(true)
    return (
      <TouchableOpacity style={styles.thumbContainer} onPress={() => navigation.navigate('Show', { id: classData.id })}>
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
            onRefresh={fetchClasses}
          />}
          style={styles.scroll}
          contentContainerStyle={styles.contentScroll}
          data={classes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id
            // .toString()
          }
        />
      )}

      {pageLoading && <ActivityIndicator size={'large'} color={'white'} />}


    </View>
  );
}