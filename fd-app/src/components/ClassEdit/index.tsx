import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { ClassType } from '../../util/ClassInfoType';
import { Button } from '../Button';
import { FormBox } from '../FormBox';
import { TimeForm } from '../TimeForm';
import { getClassInfo, sendClassInfo } from './apiCallFunctions';

import { styles } from './styles';

export function ClassEdit() {
  const [name, setClassName] = useState('')
  const [description, setClassDescription] = useState('')
  const [teacher, setClassTeacher] = useState('')
  const [classTime, setDate] = useState(new Date())
  const [duration, setClassDuration] = useState(0)
  const [categoryId, setCategoryId] = useState(207)

  const [buttonLoading, setButtonLoading] = useState(false)

  let isActive = true
  useEffect(() => { isActive = true; fetchData(); return () => { isActive = false } }, [])

  const route = useRoute()
  const navigation = useNavigation()

  if (route.params) {
    var { class_id, editing } = route.params as { class_id: number | undefined, editing: boolean | undefined }
  }

  async function fetchData() {

    if (editing) {
      const classInfo = await getClassInfo(class_id as number)

      if (classInfo === undefined) {
        Alert.alert("Erro", "Não foi possível processar a solicitação, tente mais tarde!")
      } else if (isActive) {
        setClassName(classInfo.name)
        setClassDescription(classInfo.description)
        setClassTeacher(classInfo.teacher_name)
        setDate(new Date(classInfo.start_time))
        setClassDuration(classInfo.duration)
        setCategoryId(classInfo.category_id)
      }
    }
  }

  return (
    <View style={styles.container}>

      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContainer} indicatorStyle='white'>
        <FormBox title='Nome da aula' placeholder='Nome'
          returnKeyType='next'
          style={styles.formBox}
          onChangeText={setClassName}
          defaultValue={editing ? name : ''}
        />
        <FormBox title='Professor' placeholder='Nome do professor'
          returnKeyType='next'
          style={styles.formBox}
          onChangeText={setClassTeacher}
          defaultValue={editing ? teacher : ''}

        />

        <TimeForm formTitle='Horário' myStyle={styles.formBox} mode='time' setTime={setDate} />
        <TimeForm formTitle='Dia da aula' myStyle={styles.formBox} mode='date' setTime={
          (newDate) => {
            newDate.setHours(classTime.getHours(), classTime.getMinutes())
            setDate(newDate)
          }} />

        <FormBox title='Tempo de aula (minutos)'
          style={styles.formBox}
          keyboardType='numeric'
          returnKeyType='next'
          placeholder='Quantos minutos?'
          onChangeText={(time) => { if (time.length > 0) setClassDuration(parseInt(time) * 60); }}
          defaultValue={editing ? (duration / 60).toString() : ''}
        />

        <FormBox title='Descrição da aula' placeholder='Um pequeno resumo sobre a aula'
          returnKeyType='done'
          style={[styles.formBox,
          { paddingBottom: 15 }]}
          // ]}
          multiline
          formStyle={[styles.bigForm]}
          onChangeText={setClassDescription}
          defaultValue={editing ? description : ''}
        />

        <Button titleText={editing ? 'Salvar' : 'Criar aula'} isLoading={buttonLoading} onPress={
          async () => {
            if (isActive) {
              setButtonLoading(true);
            }
            let response = await sendClassInfo(
              {
                id: 0,
                category_id: categoryId,
                description: description,
                duration: duration,
                name: name,
                start_time: classTime.toISOString(),
                teacher_name: teacher
              }, class_id)

            if (response) {
              Alert.alert("Sucesso", "Aula salva com sucesso", [{
                text: 'OK',
                style: 'cancel',
                onPress: navigation.goBack
              }],
                { cancelable: true, onDismiss: navigation.goBack })
            } else {
              Alert.alert("Erro", "Não foi possível processar a solicitação, tente mais tarde!")
            }
            if (isActive) {
              setButtonLoading(false)
            }
            // console.log(name, teacher, description, classTime.toISOString(), duration)
          }
        } />

      </ScrollView>
    </View>
  );
}