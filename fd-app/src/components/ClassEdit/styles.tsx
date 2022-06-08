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
    paddingVertical: 10,
  },

  scrollContainer: {
    // width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },

  bigForm: {
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    // height: 600,
  }
});