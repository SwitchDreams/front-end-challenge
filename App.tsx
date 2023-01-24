import React from "react";
import { NativeBaseProvider } from "native-base";
import LoginScreen from "./src/screens/LoginScreen";
import SignUp from "./src/screens/SignUp";

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}
