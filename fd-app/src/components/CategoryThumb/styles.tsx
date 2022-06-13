import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '99%',

    minHeight: 100,
    borderColor: theme.color.line,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    // borderWidth: 0.5,

    alignItems: 'flex-start',
    justifyContent: 'center',

    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  title: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.medium,
    color: theme.color.text,

    paddingTop: 5,
  },
  
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text3,

    paddingVertical: 5,
  }
});