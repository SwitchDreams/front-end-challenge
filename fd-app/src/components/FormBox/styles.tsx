import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  title: {

    fontSize: theme.fontSizes.regular,
    fontFamily: theme.fonts.regular,
    color: theme.color.text,
    marginBottom: 5,
  },

  input: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: theme.color.line,
    backgroundColor: theme.color.box,
    width: "100%",
    // height: 50,
    color: theme.color.text3,
    padding: 12,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
  },

});