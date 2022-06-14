import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    height: '100%',
    backgroundColor: theme.color.primary,

    alignItems: 'center',
    alignSelf:'center',
  },

  scrollContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },

  containerForm: {
    marginVertical: 10,
  },

  biggerForm: {
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    marginBottom: 10,
  },

  text: {
    color: theme.color.text,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    
    textAlign: 'center',
  }
});