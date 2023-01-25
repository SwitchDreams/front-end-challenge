import React, { createContext, useState } from 'react';

export const ClassesContext = createContext({});

export const ClassesProvider = ({ children }) => {
    

    return (
        <ClassesProvider.Provider
            value = {{

            }}
        >
            { children }
        </ClassesProvider.Provider>
    )
}