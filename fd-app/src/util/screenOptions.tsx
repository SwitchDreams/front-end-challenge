import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { theme } from "../theme";

export const myScreenOptions: NativeStackNavigationOptions = {

  contentStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  // header: Header,

  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: theme.fonts.regular, 
    fontSize: theme.fontSizes.medium,
    color: theme.color.text
  },

  headerStyle: {
    backgroundColor: theme.color.primary,
  },

  headerTintColor: theme.color.text,

  headerShadowVisible: false,
}
