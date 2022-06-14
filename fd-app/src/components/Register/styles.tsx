import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',

    // height: '100%',
    width: "85%",
    // alignSelf: 'center',
    // top: '8%',

    // backgroundColor: theme.color.box,
    justifyContent: 'space-around',
    alignItems: 'center',
    // position: 'absolute',
  },

  logo: {
    width: '90%',
    marginVertical: 5,
    
  },

  header: {

    alignItems: 'center',
    // backgroundColor: theme.color.box,
    marginVertical: 15,
  },

  headerTitle: {
    fontSize: theme.fontSizes.medium,
    color: theme.color.text,
    fontFamily: theme.fonts.regular,
    marginBottom: 5,
  },

  headerDescription: {
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
    fontFamily: theme.fonts.regular,
    textAlign:'center',
  },

  registerForm: {
    width: '100%',
    // marginBottom: 20,
    // maxHeight: '50%',
    // backgroundColor: theme.color.box
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: '12%',
    // backgroundColor: 'black',
  },

  formBox: {
    marginVertical: 10,
  }

});