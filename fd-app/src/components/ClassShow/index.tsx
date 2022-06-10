import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, Text, View } from 'react-native';
import { Button } from '../Button';
import { testImg } from '../ClassThumbnail/testImg';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { api } from '../../libs/api';
import { getPaddedTime, getWeekDay } from '../../util/timeFunctions';
import { SmileyXEyes } from 'phosphor-react-native';
import { theme } from '../../theme';
import { userContext } from '../../util/userInfoContext';
import { isUserRegistered } from './apiCallFunctions';
import { ClassType } from '../../util/ClassInfoType';

export function ClassShow({ navigation }: any) {
  const [pageIsLoading, setPageIsLoading] = useState(true)
  const [classData, setClassData] = useState<any>(null)
  const [loadingError, setErrorLoading] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  // let isRegistered = false

  const [classStart, setClassStart] = useState(new Date())
  const [classEnd, setClassEnd] = useState(new Date())

  const route = useRoute()

  const userInfo = useContext(userContext)

  useEffect(() => {
    fetchData()
  }, [])

  function setClassTime(classInfo: ClassType) {
    const init = new Date(classInfo.start_time)

    setClassStart(init)
    setClassEnd(new Date(init.getTime() + classInfo.duration * 1000))
  }

  async function fetchData() {
    setPageIsLoading(true)
    setErrorLoading(false)

    const params: any = route.params
    const classId = params.id

    try {
      
      const response = await api.get(`gym_classes/${classId}`)
      
      setClassTime(response.data)
      setClassData(response.data)
      setIsRegistered(await isUserRegistered((response.data as ClassType).id, userInfo.id))

    } catch (error) {
      JSON.stringify(error)
      Alert.alert("Erro", "Não foi possivel carregar os dados, tente novamente mais tarde")
      setErrorLoading(true)
    }
    setPageIsLoading(false)
  }

  async function handleUserSubscription() {
    setButtonLoading(true)

    try {
      const response = await api.post('/gym_class_users', {
        gym_class_user: {
          gym_class_id: classData.id,
          user_id: userInfo.id,
        }
      })

      navigation.navigate('InscricaoModal', { requestSuccess: true })

    } catch (error) {
      navigation.navigate('InscricaoModal', { requestSuccess: false })
    };

    setButtonLoading(false)
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

            <Button titleText={isRegistered ? 'Inscrito' : 'Inscrever-se'}
              isLoading={buttonLoading}

              disabled={isRegistered}
              onPress={handleUserSubscription}

              style={{marginBottom: 10}}
            />

            {isRegistered &&
              <Button
                titleText={'Cancelar Inscrição'}
                isLoading={buttonLoading}
              />}
          </>)}
      </ScrollView>
    </View>
  );
}

