import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    height: '100%',
    backgroundColor: theme.color.primary,

    alignItems: 'center',
    alignSelf:'center',
  },

  formBox: {
    marginVertical: 10,
  },

  scrollContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },

  bigForm: {
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },

  dropDownWrapper: {
    backgroundColor: theme.color.box,
    color: theme.color.box,
    width: '100%',
    // height: 50,
    marginVertical: 10,
    // alignItems: 'center',
    // justifyContent: 'space-around'
  },

  textItem: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text3,
    // backgroundColor: theme.color.button
  },

  dropDown: {
    backgroundColor: theme.color.box,
    width: '100%',
    // height: 50,
    color: theme.color.box,
    borderColor: theme.color.primary
  },

});