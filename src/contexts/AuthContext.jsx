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


    return(
        <AuthContext.Provider value={{ user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}