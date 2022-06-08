import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignSelf: 'center',
    alignItems: 'center',
    
    justifyContent: 'center',

    width: '100%',
    height: '100%',

    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    
    flexDirection: 'column',
    width: '90%',
    height: 180,

    backgroundColor: theme.color.primary,

    padding: 10,

    borderRadius: 10,
  },

  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
  },

  xButton: {
    alignSelf: 'flex-end',
    
  }
});