import React, { useState, createContext, useEffect } from 'react';
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

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setloading] = useState(true);

    const isAuthenticated = !!user.email;

    useEffect(() => {
        async function getUser(){
            const userInfo = await AsyncStorage.getItem('@fitdreams');
            let hasUser = JSON.parse(userInfo || '{}');

            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    birthday: hasUser.birthday,
                    role: hasUser.role,
                    created_at: hasUser.created_at,
                    updated_at: hasUser.updated_at,
                    token: hasUser.token
                });
            }

            setloading(false);
        }

        getUser();
    }, [])

    async function signIn({ email, password }){
        //setLoadingAuth(true);

        try{
            const response = await api.post('api/users/login', {
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
            //console.log(data);

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

            //setLoadingAuth(false);

            //console.log(response.data);
            //console.log(token);
        }catch(err){
            console.log('erro ao acessar!', err);
            //setLoadingAuth(false);
        }
    }

    async function signOut(){
        await AsyncStorage.clear().then(() => {
          setUser({
            id: 0,
            name: null,
            email: '',
            birthday: null,
            role: '',
            created_at: '',
            updated_at: '',
            token: '',
          })
        })
      }

    async function registerUserTeaAdm({ email, password, role }){
        try{
            const response = await api.post('api/users', {
                "user": {
                    email,
                    password,
                    role
                }
            })
            //console.log(response.data)
            alert('Usuário cadastrado com sucesso!');
        }catch(err){
            console.log('Erro ao cadastrar', err);
        }
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, loading, loadingAuth, signOut, registerUserTeaAdm }}>
            {children}
        </AuthContext.Provider>
    )
}