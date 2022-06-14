import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,

    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },

  header: {
    borderBottomWidth: 0.5,
    borderColor: theme.color.line,
  },

  headerTitleStyle: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.color.text,
  },

  tabBar: {
    backgroundColor: theme.color.primary,
    // position: 'absolute',
    borderTopColor: theme.color.line,
    borderTopWidth: 0.5,

  },

  tabBarLabel: {
    fontFamily: theme.fonts.regular,
    marginBottom: 5,
  }

});