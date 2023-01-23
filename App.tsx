import React from "react";
import { NativeBaseProvider } from "native-base";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}
