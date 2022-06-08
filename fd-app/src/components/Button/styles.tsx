import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 300,
    height: 50,
    backgroundColor: theme.color.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  title: {
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
    fontFamily: theme.fonts.regular,
  }
});