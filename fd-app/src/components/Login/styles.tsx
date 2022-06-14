import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    height: 460,
    width: "85%",
    alignSelf: 'center',
    top: '12%',

    // backgroundColor: theme.color.box,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',    
  },

  logo: {
    height: 58.57,
    width: 268,
    // backgroundColor: theme.color.box,
    // left: 16,
    // top: 0,
    // position: 'absolute'
  },

  header: {
    color: theme.color.text,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.regular,
    // left: 120,
    // top: 40,
  },

  formBox: {
    // position: 'relative',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: theme.color.line,
    backgroundColor: theme.color.box,
    width: "100%",
    height: 50,
    color: theme.color.text3,
    // top: "10%",
    padding: 12,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    // justifyContent: ,
  },

  register: {
    width: "100%",
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  title: {

    // top: 141,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
    marginBottom: 5,
    fontFamily: theme.fonts.bold,
  },

  // formInfo: {
  //   // flex: 0.5,
  //   width: '100%',
  //   // marginBottom: 5,
  //   // backgroundColor: theme.color.box,
  //   // flexDirection: 'row',
  // },

  loginForm : {
    width: '100%',

    // backgroundColor: theme.color.button,
    // justifyContent: 'space-between',
    marginBottom: 10,
  }
});