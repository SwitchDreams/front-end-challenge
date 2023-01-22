import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login";
import Register from "./src/screens/register";
import Home from "./src/screens/home";
import ClassPage from "./src/screens/classPage";
import editPage from "./src/screens/editPage";
import AuthProvider from "./src/context/auth";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="classPage" component={ClassPage} />
          <Stack.Screen name="editPage" component={editPage} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default MyStack;
