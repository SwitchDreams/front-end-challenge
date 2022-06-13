import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  categoryName: string,
  description: string,
}

export function CategoryThumb({ categoryName, description }: Props) {
  return (
    <View style={styles.container}>

      <Text numberOfLines={1} style={styles.title}>{categoryName}</Text>
      <Text numberOfLines={3} style={styles.description}>{description}</Text>
      
    </View>
  );
}