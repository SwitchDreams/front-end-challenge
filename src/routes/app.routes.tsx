import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUp from "../screens/SignUp";
import AulasScreen from "../screens/AulasScreen";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Aulas" component={AulasScreen} />
    </Navigator>
  );
}
