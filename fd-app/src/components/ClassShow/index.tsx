import React, { useCallback, useContext, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, Text, View } from 'react-native';
import { Button } from '../Button';
import { testImg } from '../ClassThumbnail/testImg';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { api } from '../../libs/api';
import axios, { Canceler, CancelTokenSource } from 'axios'

import { getPaddedTime, getWeekDay } from '../../util/timeFunctions';
import { SmileyXEyes } from 'phosphor-react-native';
import { theme } from '../../theme';
import { userContext } from '../../util/userInfoContext';
import { excludeGymClass, excludeGymClassUser, isUserRegistered } from './apiCallFunctions';
import { ClassType } from '../../util/ClassInfoType';
import { feedbackModal, isCustomer } from '../../util/utilFunctions'

export function ClassShow({ navigation }: any) {
  const [pageIsLoading, setPageIsLoading] = useState(true)
  const [classData, setClassData] = useState<any>(null)
  const [loadingError, setErrorLoading] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const [classStart, setClassStart] = useState(new Date())
  const [classEnd, setClassEnd] = useState(new Date())

  const route = useRoute()

  const userInfo = useContext(userContext)

  navigation = useNavigation()

  function setClassTime(classInfo: ClassType) {
    const init = new Date(classInfo.start_time)

    if (isActive) {
      setClassStart(init)
      setClassEnd(new Date(init.getTime() + classInfo.duration * 1000))
    }
  }

  let isActive = true

  useFocusEffect(useCallback(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    fetchData(source)
    isActive = true

    return () => {
      source.cancel()
      isActive = false
    }
  }, []))

  async function fetchData(source: CancelTokenSource) {

    try {
      if (isActive) {
        setPageIsLoading(true)
        setErrorLoading(false)
      }

      const params: any = route.params
      const classId = params.id
      const response = await api.get(`gym_classes/${classId}`, { cancelToken: source.token })

      if (isActive) {
        setPageIsLoading(false)
        setClassTime(response.data)
        setClassData(response.data)
        setIsRegistered(await isUserRegistered((response.data as ClassType).id, userInfo.id))
      }

    } catch (error) {

      // console.log(JSON.stringify(error))
      if (!axios.isCancel(error) && isActive) {
        setErrorLoading(true)
        setPageIsLoading(false)
        Alert.alert("Erro", "Não foi possivel carregar os dados, tente novamente mais tarde")
      }
    }
  }

  async function handleUserSubscription() {
    if (isActive) {
      setButtonLoading(true)
    }

    try {
      const response = await api.post('/gym_class_users', {
        gym_class_user: {
          gym_class_id: classData.id,
          user_id: userInfo.id,
        }
      })

      feedbackModal(true, navigation.goBack)

    } catch (error) {
      feedbackModal(false, navigation.goBack)
    };

    if (isActive) {
      setButtonLoading(false)
    }
  }

  return (
    <View style={styles.container}>

      {pageIsLoading && <ActivityIndicator color={'white'} size={'large'} />}

      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContainer}>

        {(loadingError) &&
          <SmileyXEyes
            color={theme.color.line}
            size={theme.iconBigSize}
            weight={'regular'} />}

        {classData && !loadingError &&
          (<>
            < Image source={{ uri: (classData.imgSource ? classData.imgSource : testImg) }}
              style={styles.img} />

            <View style={styles.classDataContainer}>
              <View style={styles.classInfo}>
                <Text style={styles.classTitle}>
                  {classData.name}
                </Text>

                <Text style={styles.classProfessor}>
                  Prof. {classData.teacher_name}
                </Text>
              </View>

              <View style={styles.classTime}>
                <Text style={styles.classTimeText}>
                  Ocorre dia {classStart.getDate()}/{
                    classStart.getMonth() + 1}, {
                    getWeekDay(classStart.getDay())}
                </Text>

                <Text style={styles.classTimeText}>
                  {getPaddedTime(classStart)} as {getPaddedTime(classEnd)}
                </Text>
              </View>

              <Text style={styles.description}>
                {classData.description}
              </Text>
            </View>

            {isCustomer(userInfo) && <Button titleText={isRegistered ? 'Inscrito' : 'Inscrever-se'}
              isLoading={buttonLoading && !isRegistered}

              disabled={isRegistered}
              onPress={handleUserSubscription}

              style={styles.button}
            />}

            {isRegistered && isCustomer(userInfo) &&
              <Button
                titleText={'Cancelar Inscrição'}
                isLoading={buttonLoading}
                onPress={async () => {
                  if (isActive) {
                    setButtonLoading(true)
                  }

                  feedbackModal(await excludeGymClassUser(), navigation.goBack)
                }}
                style={styles.button}

              />}

            {!isCustomer(userInfo) &&
              <Button
                titleText={'Editar'}
                isLoading={buttonLoading}
                onPress={() => navigation.navigate('Edit',
                  {
                    class_id: classData.id,
                    editing: true
                  })}
                style={styles.button}
              />
            }

            {!isCustomer(userInfo) &&

              <Button
                titleText={'Excluir Aula'}
                isLoading={buttonLoading}
                onPress={() => {

                  if (isActive) {
                    setButtonLoading(true)
                  }

                  Alert.alert("Excluindo Aula", "Tem certeza?", [
                    {
                      text: 'Sim',
                      onPress: async () => { feedbackModal(await excludeGymClass(classData.id), navigation.goBack) },
                      style: 'destructive',
                    },
                    {
                      text: 'Não',
                      style: 'default'
                    },
                  ], { cancelable: true })

                  if(isActive) {
                    setButtonLoading(false)
                  }
                }}
                style={styles.button}
              />
            }

          </>)}
      </ScrollView>
    </View>
  );
}

