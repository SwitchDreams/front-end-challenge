import React, { createContext, useState } from "react";
import { api, createUser } from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const navigation = useNavigation();

  function signIn(email, password) {
    api
      .post("/users/login", {
        user: {
          email: email,
          password: password,
        },
      })
      .then((res) => {
        alert("Bem vindo!");
        setUser(res.data);
        setIsLogged(true);
        navigation.navigate({
          name: "Home",
        });
      })
      .catch((err) => {
        alert("Não conseguimos fazer seu login, por favor verifique suas credenciais.");
      });
  }

  function signOut() {
    setIsLogged(false);
    setUser({});
    navigation.navigate({
        name: "Home",
      });
  }

  function register(email, password, role) {
    api
      .post("/users", {
        user: {
          email: email,
          password: password,
          role: role,
        },
      })
      .then((res) => {
        setUser(res.data);
        setIsLogged(true);
        navigation.navigate({
          name: "Home",
        });
        alert("Bem vindo!");
      })
      .catch((err) => {
        alert("Não conseguimos efetuar o seu cadastro, tente novamente!");
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, user, isLogged, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
