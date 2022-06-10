import { CheckCircle, SmileyXEyes, X } from 'phosphor-react-native';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../../theme';

import { styles } from './styles';


export function BaseModal({ route, navigation }: any) {
  const { requestSuccess } = route.params

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