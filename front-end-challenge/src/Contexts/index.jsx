import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_URL_API;

export const ClassesContext = createContext({});

export const ClassesProvider = ({ children }) => {
    const [ erroSignUp, setErroSignUp ] = useState(false);

    const navigate = useNavigate();

    const postSignUp = (signUp) => {
        const body = {
            user: {
                email: signUp.email,
                password: signUp.password,
                role: "admin"
            },
        }

        axios.post(`${URL}/users`, body)
        .then(() => navigate("/"))
        .catch((e) => {
            console.log(e.response.data.status);
            setErroSignUp(true);
        })
    }

    return (
        <ClassesContext.Provider
            value = {{
                postSignUp,
                setErroSignUp,
                erroSignUp,
            }}
        >
            { children }
        </ClassesContext.Provider>
    )
}