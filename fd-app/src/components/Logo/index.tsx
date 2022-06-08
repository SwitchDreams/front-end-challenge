import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function Logo() {
  return (
    <Image style={styles.container} source={require('../../assets/logo-b.png')} />
  );
}