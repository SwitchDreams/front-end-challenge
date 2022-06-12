import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.color.primary
  },

  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.big,
    color: theme.color.text,
    marginVertical: 30,
  },

  button: {
    marginVertical: 10
  },

  listing: {borderWidth: 0.5, borderColor: theme.color.line}
});