import { DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { theme } from '../theme';

export const myTheme: Theme = {
  
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    background: theme.color.box,
    placeholder: theme.color.text,
    text: theme.color.text3,
    primary: theme.color.primary,

  },

  fonts: {
    ...DefaultTheme.fonts,    
  },
  
  roundness: 5,
}