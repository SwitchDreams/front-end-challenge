import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Aulas from "../screens/Aulas";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type AppRoutesProps = {
    Home: undefined;
    Aulas: undefined;
    Profile: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>

const {Navigator, Screen} = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
                return <MaterialCommunityIcons name="home" size={size} color={color} />
            }

            return <MaterialCommunityIcons name="home-outline" size={size} color={color} />
          }
        }}
      />
      <Screen
        name="Aulas"
        component={Aulas}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <MaterialCommunityIcons name="table-of-contents" size={size} color={color} />
            }

            return <MaterialCommunityIcons name="table-of-contents" size={size} color={color} />
          }
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <MaterialCommunityIcons name="account" size={size} color={color} />
            }

            return <MaterialCommunityIcons name="account-outline" size={size} color={color} />
          }
        }}
      />

    </Navigator>
  );
}
