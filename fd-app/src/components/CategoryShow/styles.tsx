import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignSelf: 'center',
    alignItems: 'center',
    
    justifyContent: 'center',

    width: '100%',
    height: '100%',

    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  modal: {
    // flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    
    flexDirection: 'column',
    width: '90%',
    // height: 40,

    backgroundColor: theme.color.primary,

    padding: 10,
    borderRadius: 10,
  },

  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
  },

  xButton: {
    alignSelf: 'flex-end',
  },

  name: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.medium,
    color: theme.color.text,

    paddingTop: 5,
    textTransform: 'capitalize',
  },
  
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text3,

    paddingVertical: 5,
  },

  error: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
    textAlign: 'center',
    padding: 15,
  },

  scrollContainer: {
    justifyContent: 'space-around',
    // height: '40%'
  },

  button:{ 
    marginVertical: 10,
  }

});