import React from "react";
import { NativeBaseProvider } from "native-base";
import { Routes } from "./src/routes";
import { AuthContextProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
