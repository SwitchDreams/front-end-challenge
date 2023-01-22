import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [user, setUser] = useState({
        id: 0,
        name: null,
        email: '',
        token: '',
        birthday: null,
        role: '',
        created_at: '',
        updated_at: ''
    })

    const isAuthenticated = !!user.email;

    async function signIn({ email, password }){
        alert("Email e senha: " + email + " " + password);
    }


    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}