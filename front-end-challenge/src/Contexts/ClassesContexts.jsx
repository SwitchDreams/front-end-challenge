import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_URL_API;

export const ClassesContext = createContext({});

export const ClassesProvider = ({ children }) => {
    const [ classesInfos, setClassesInfos ] = useState({});
    const [ categories, setCategories ] = useState({});
    const [ filter, setFilter ] = useState("");
    const [ classInfo, setClassInfo ] = useState({});

    const getClasses = (token) => {
        axios.get(`${URL}/gym_classes`, token)
        .then((answer) => {
            setClassesInfos(answer.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const getCategories = (token) => {
        axios.get(`${URL}/categories`, token)
        .then((answer) => {
            setCategories(answer.data)
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const getClassById = (token, id) => {
        axios.get(`${URL}/gym_classes/${id}`, token)
        .then((answer) => {
            setClassInfo(answer.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return (
        <ClassesContext.Provider
            value = {{
                getClasses,
                classesInfos,
                categories,
                getCategories,
                filter,
                setFilter,
                getClassById,
                classInfo,
                setClassInfo
            }}
        >
            { children }
        </ClassesContext.Provider>
    )
}