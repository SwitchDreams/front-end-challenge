import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

import { styles } from './styles';

interface Props {
  logoStyle?: StyleProp<ImageStyle>
}

export function Logo({ logoStyle }: Props) {
  return (
    <Image style={[styles.container, logoStyle]} source={require('../../assets/logo-b.png')} />
  );
}