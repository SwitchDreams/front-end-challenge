import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,

    width: '100%',
    height: 60,
    flexDirection: 'row',

    // padding: 20,
    borderColor: theme.color.line,
    borderBottomWidth: 0.5,

    // backgroundColor: theme.color.primary,

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.color.text,
  },

  backButtonIcon: {
    // alignSelf: 'flex-start'
  }

});