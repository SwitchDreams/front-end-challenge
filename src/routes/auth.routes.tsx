import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";

type AuthRoutesProps = {
    Login: undefined;
    SignUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesProps>

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
