import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { api } from '../../../../libs/api';
import { GymClassUserType } from '../../../../util/gymClassUserType';
import { userContext } from '../../../../util/userInfoContext';
import { ClassThumbnail } from '../../../ClassThumbnail';

import { styles } from './styles';

interface Props {
  userId: number
  myStyle?: StyleProp<ViewStyle> // Style to apply to the container containing the classes
}

export function ClassesList({ userId, myStyle }: Props) {
  const [pageLoading, isPageLoading] = useState(true)
  const [haveItems, setHaveItems] = useState(false)
  const [userClasses, setUserClasses] = useState<null | GymClassUserType[]>(null)
  const [reload, setReload] = useState(false)

  const navigation = useNavigation()

  function filterUsersClasses(subscriptions: GymClassUserType[], isActive: boolean) {
    let mySubscriptions: GymClassUserType[] = [];

    subscriptions.forEach((value) => {
      if(value.user.id === userId) {
        mySubscriptions.push(value)
      }
    })

    if(isActive && mySubscriptions.length > 0) {
      setHaveItems(true)
    }
    return mySubscriptions;
  }

  useEffect(
    () => {
    let isActive = true;
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    async function fetchData() {

      try {
        if(isActive) {
          isPageLoading(true)
        }
        const response = await api.get(`/gym_class_users`, { cancelToken: source.token });

        // console.log(response.data)
        if (isActive) {
          setUserClasses(filterUsersClasses(response.data, isActive))
                    
          isPageLoading(false)
        }

      } catch (error) {

        if (!axios.isCancel(error) && isActive) {
          Alert.alert("Erro", "Não foi possivel carregar os dados, tente novamente mais tarde")
          setHaveItems(false)
          isPageLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      source.cancel()
      isActive = false
    };
  }, [reload])

  function renderItem(listItem: any) {
    const classData = (listItem.item as GymClassUserType).gym_class

    return (
      <TouchableOpacity style={styles.thumbContainer} onPress={() => navigation.navigate('ShowClass' as never, { id: classData.id } as never)}>
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
    <View style={[styles.container, myStyle]}>

      {!haveItems && <Text style={styles.message}>Sem aulas disponíveis</Text>}

      {userClasses && (
        <FlatList
          refreshControl=
          {<RefreshControl
            refreshing={false}
            onRefresh={() => { setReload((prev) => !prev) }}
          />}
          style={styles.scroll}
          contentContainerStyle={styles.contentScroll}
          data={userClasses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      {pageLoading && <ActivityIndicator size={'large'} color={'white'} />}


    </View>
  );
}