import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 190,
    width: "85%",

    flexDirection: 'column',

    alignItems: 'center',
    backgroundColor: theme.color.thumbnail,

    borderRadius: 10,
    
    // borderWidth: 0.5,
    borderColor: theme.color.line,
  },

  text: {
    fontFamily: theme.fonts.regular,
    color: theme.color.text,
  },

  thumb: {
    height: 128,
    width: '100%',
    
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    resizeMode: 'cover',
  },

  classInfo: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    justifyContent: 'center'
  },

  classData: {
    flexDirection: 'column',
    justifyContent: 'center',

    // backgroundColor: theme.color.primary
  },

  nameInfo: {
    flex: 1,
    alignItems: 'flex-start',
    // justifyContent: "center"
  },

  timeInfo: {
    flex: 1,
    alignItems: 'flex-end',
  }

});