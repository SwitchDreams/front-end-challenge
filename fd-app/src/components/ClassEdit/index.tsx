import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Button } from '../Button';
import { FormBox } from '../FormBox';
import { TimeForm } from '../TimeForm';

import { styles } from './styles';

export function ClassEdit() {
  const [myDate, setDate] = useState(new Date())

  return (
    <View style={styles.container}>

      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContainer}>
        <FormBox title='Nome da aula' placeholder='Nome'
          returnKeyType='next'
          style={styles.formBox}
        />
        <FormBox title='Professor' placeholder='Nome do professor'
          returnKeyType='next'
          style={styles.formBox}
        />

        <TimeForm myStyle={{ marginBottom: 10 }} mode='time' setTime={setDate} />

        <FormBox title='Imagem de Capa' placeholder='Selecione uma imagem...' />
        <FormBox title='Dias da semana' placeholder='Selecionar'
          returnKeyType='next'
          style={styles.formBox}
        />
        <FormBox title='Descrição da aula' placeholder='Um pequeno resumo sobre a aula'
          returnKeyType='done'
          style={[styles.formBox,
          { paddingBottom: 20 }]}
          // ]}
          multiline
          formStyle={[styles.bigForm]}
        />

        <Button titleText='Salvar' isLoading={false} />

      </ScrollView>
    </View>
  );
}