import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_URL_API;

export const ClassesContext = createContext({});

export const ClassesProvider = ({ children }) => {
    const [ classesInfos, setClassesInfos ] = useState({});
    
    const getClasses = (token) => {
        axios.get(`${URL}/categories`, token)
        .then((answer) => {
            setClassesInfos(answer.data);
        })
        .catch((e) => {
            console.log(e);
        })

    }

    return (
        <ClassesContext.Provider
            value = {{

            }}
        >
            { children }
        </ClassesContext.Provider>
    )
}