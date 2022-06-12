import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

    width: '100%',

    // backgroundColor: theme.color.primary,
  },

  scroll: {
    width: '100%',
  },

  contentScroll: {
    // width: '100%',
    justifyContent: 'space-around',
    paddingTop: 30,
  },

  message: {
    paddingTop: 30,
    fontFamily: theme.fonts.regular,
    color: theme.color.text3,
    fontSize: theme.fontSizes.medium
  },

  thumbContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
  },

});