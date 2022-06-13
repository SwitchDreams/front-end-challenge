import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { api } from '../../../libs/api';
import { CategoryType } from '../../../util/categoryType';
import { feedbackModal } from '../../../util/utilFunctions';
import { Button } from '../../Button';
import { FormBox } from '../../FormBox';
import { getCategoryInfo } from './apiCallFunctions';

import { styles } from './styles';

export function CreateCategory() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [buttonLoading, isButtonLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute()

  let screenActive = true

  if (route.params) {
    var { category_id, editing } = route.params as { category_id: number | undefined, editing: number | undefined };
  }

  useEffect(() => {

    screenActive = true;

    async function fetchData() {

      const categoryInfo = await getCategoryInfo(category_id as number)

      if (screenActive) {

        if (categoryInfo === undefined) {
          Alert.alert("Erro", "Não foi possível obter os dados da categoria, tente mais tarde!");
        } else {
          setName(categoryInfo.name)
          setDescription(categoryInfo.description)
        }
      }

      return true;
    }

    if (editing) {
      fetchData()
    }

    return () => {
      screenActive = false;
    };

  }, [])

  async function handleCreateCategory() {

    if (name.length === 0) {
      Alert.alert("Nome inválido", "Digite um nome válido!");
      return
    }

    if (description.length === 0) {
      Alert.alert("Descrição inválida", "Digite uma descrição válida");
      return
    }

    try {
      isButtonLoading(true)

      let response;


      if (editing) {
        response = await api.patch(`/categories/${category_id}`, {
          "category": {
            "name": name,
            "description": description
        }
        });

      } else {
        response = await api.post('/categories', {
          "category": {
            "name": name,
            "description": description
          }
        });
      }

      
      feedbackModal(true, editing? () => navigation.navigate('IndexCategory' as never) :
         navigation.goBack, 
         'Categoria criada/alterada com sucesso!')
    } catch (error) {

      // console.log(JSON.stringify(error));
      feedbackModal(false, navigation.goBack, undefined, "Falha ao criar/alterar a categoria. Tente mais tarde!")
    }

    isButtonLoading(false)
  }

  return (

    <View style={styles.container}>


      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContainer} indicatorStyle='white'>

        <Text style={styles.text}>
          {!editing && "Digite os dados da nova categoria:"}
          {editing && "Altere os dados da categoria abaixo"}
        </Text>

        <FormBox
          title='Nome da Categoria'
          placeholder='Digite o nome'
          style={styles.containerForm}

          defaultValue={name}
          onChangeText={(t) => setName(t)}
        />
        <FormBox

          title='Descrição'
          placeholder='Um pequeno resumo sobre a categoria'
          style={styles.containerForm}
          formStyle={styles.biggerForm}

          multiline
          defaultValue={description}
          onChangeText={(t) => setDescription(t)}
        />

        <Button titleText={editing ? 'Salvar' : 'Criar'} isLoading={buttonLoading}
          onPress={handleCreateCategory}
        />
      </ScrollView>
    </View>

  );
}