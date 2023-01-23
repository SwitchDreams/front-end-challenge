import React, { useState, createContext } from 'react';
import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [user, setUser] = useState({
        id: 0,
        name: null,
        email: '',
        birthday: null,
        role: '',
        created_at: '',
        updated_at: '',
        token: ''
    })

    const [loading, setLoadingAuth] = useState(false);

    const isAuthenticated = !!user.email; // se email passar a ter algum valor diferente de '', então o usuário fez login.

    async function signIn({ email, password }){
        //alert("Email e senha: " + email + " " + password);

        setLoadingAuth(true);
        try{
            const response = await api.post('/api/users/login', {
                "user": {
                    email,
                    password
                }
            })
            const bearerToken = response.headers.authorization;
            const [, token] = bearerToken.split(" ");

            const { id, name, birthday, role, created_at, updated_at } = response.data;

            const data = {
                id,
                name,
                email,
                birthday,
                role,
                created_at,
                updated_at,
                token
            }

            await AsyncStorage.setItem('@fitdreams', JSON.stringify(data));

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email,
                birthday,
                role,
                created_at,
                updated_at,
                token
            })

            setLoadingAuth(false);

            console.log(response.data);
            console.log(token);
        }catch(err){
            console.log('erro ao acessar!', err);
            setLoadingAuth(false);
        }
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}