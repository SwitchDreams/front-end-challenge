import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    height: 525,
    width: "85%",
    alignSelf: 'center',
    top: '8%',

    // backgroundColor: theme.color.box,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
  },

  logo: {
    height: "10%",
    width: '90%',
  },

  header: {

    alignItems: 'center',
    // backgroundColor: theme.color.box,
    marginBottom: 10,
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
    marginBottom: 10,
    // maxHeight: '50%',
    // backgroundColor: theme.color.box
  },

  footer: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
  },

  backButton: {
    alignSelf: 'flex-start',
    // backgroundColor: 'black',
  }

});