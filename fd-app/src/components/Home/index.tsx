import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { userContext } from '../../util/userInfoContext';

import { styles } from './styles';

export function Home({ navigation }: any) {

  const route = useRoute()

  const userInfo = useContext(userContext)

  console.log(userInfo)
  return (
    <View style={styles.container}>

    </View>
  );
}