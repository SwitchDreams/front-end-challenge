import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    backgroundColor: theme.color.primary,
  },

  scroll: {
    width: '100%',
  },

  contentScroll: {
    // width: '100%',
    justifyContent: 'space-around',
    paddingTop: 30,
  },

  thumbContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
  },
  
  message: {
    paddingTop: 30,
    fontFamily: theme.fonts.regular,
    color: theme.color.text3,
    fontSize: theme.fontSizes.medium,
    textAlign: 'center',
  },

  ddStyle: {
    backgroundColor: theme.color.box,
    // borderRadius: 100,
  },

  ddItem: {
    backgroundColor: theme.color.box,
    borderColor: theme.color.line,

  },

  ddItemText: {
    color: theme.color.text,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
  },

  input: {
    backgroundColor: theme.color.box,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    width: '85%',
    alignSelf: 'center',
    marginVertical: 15,
  },

  textItem: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text3,
  },

  dropDown: {
    backgroundColor: theme.color.box,
    width: '100%',
    // height: 50,
    color: theme.color.box,
    borderColor: theme.color.primary
  },

  dropDownWrapper: {
    backgroundColor: theme.color.box,
    color: theme.color.box,
    width: '100%',
    height: 50,
    marginVertical: 10,
    // alignItems: 'center',
    // justifyContent: 'space-around'
  },

});