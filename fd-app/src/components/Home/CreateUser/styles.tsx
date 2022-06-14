import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: theme.color.primary,
    paddingVertical: 20,

    alignItems: 'center',
    alignSelf: 'center',
  },

  scroll: {
    width: '85%'
  },

  scrollContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.color.text,
    textAlign: 'center'
  },

  formBox: {
    marginVertical: 10,
  },

  button: {
    marginVertical: 20,
  },

  lastBox: { paddingBottom: 10 },

  textItem: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text3,
    // backgroundColor: theme.color.button
  },

  textSelected: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
  },

  ViewItem: {
    backgroundColor: theme.color.box,
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