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
        alert("sucesso");
        setUser(res.data);
        setIsLogged(true);
        navigation.navigate({
          name: "Home",
        });
      })
      .catch((err) => {
        alert("Erro");
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
        return res, alert("sucesso");
      })
      .catch((err) => {
        return err, alert("Erro");
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, user, isLogged, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
