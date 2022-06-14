import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },

  scrollContainer: {
    // width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },

  img: {
    width: '100%',
    height: 201,

    resizeMode: 'cover',
  },

  classDataContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },

  classInfo: {
    width: '100%',
    paddingVertical: 10,
  },

  classTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.big,
    color: theme.color.text,
    textAlign: 'center',
    // backgroundColor: 'blue',
  },

  classProfessor: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.small,
    color: theme.color.text2,
    textAlign: 'center',
  },

  classTime: {
    paddingBottom: 10,
  },

  classTimeText: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
    // backgroundColor: 'blue',
    textAlign: 'center',
  },

  description: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.regular,
    color: theme.color.text,
    textAlign: 'justify',
    width: '90%',
    // backgroundColor: 'blue',
  },

  button: {
    marginBottom: 10,
  }

});