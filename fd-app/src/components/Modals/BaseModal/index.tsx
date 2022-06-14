import { useRoute } from '@react-navigation/native';
import { CheckCircle, SmileyXEyes, X } from 'phosphor-react-native';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../../theme';

import { styles } from './styles';

export function BaseModal({ navigation }: any) {
  const route = useRoute()
  let { requestSuccess } = route.params? route.params : { requestSucess: true } as any

  // console.log(requestSuccess)
  requestSuccess = true
  return (
    <View style={styles.container}>

      <View style={styles.modal}>

        <TouchableOpacity style={styles.xButton} onPress={() => navigation.navigate('Index')}>
          <X size={theme.iconSize} color={theme.color.icon} weight={'bold'} />
        </TouchableOpacity>


        {requestSuccess ?
          <CheckCircle color={theme.color.success} size={'94px'} weight={'regular'} />
          :
          <SmileyXEyes color={theme.color.fail} size={'94px'} weight={'regular'} />
        }

        <Text style={styles.text}>
          {requestSuccess ? "Operação feita com sucesso" : "Falha, tente novamente!"}
        </Text>
      </View>

    </View>
  );
}