import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HoursToMinutes from '../Utils/hoursToMinutes';

const URL = import.meta.env.VITE_URL_API;

export const ClassesContext = createContext({});

export const ClassesProvider = ({ children }) => {
    const [ classesInfos, setClassesInfos ] = useState({});
    const [ categories, setCategories ] = useState({});
    const [ categoryId, setCategoryId ] = useState({});
    const [ filter, setFilter ] = useState("");
    const [ classInfo, setClassInfo ] = useState({});
    const [ updated, setUpdated ] = useState(false);

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

    const getCategorieById = (id, token) => {
        axios.get(`${URL}/categories/${id}`, token)
        .then((answer) => {
            setCategoryId(answer.data);
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

    const updateClass = (token, id, infos) => {
        const { 
            name, 
            description, 
            teacher_name,
            duration,
            category
        } = infos;
        const body = JSON.stringify({
            gym_class: {
                name,
                description,
                teacher_name,
                duration: HoursToMinutes(duration),
                category
            }
        })

        axios.patch(`${URL}/gym_classes/${id}`, body, token)
        .then(() => {
            setUpdated(true);
        })
        .catch((e) => {
            console.log(e);
        });
    }

    return (
        <ClassesContext.Provider
            value = {{
                getClasses,
                classesInfos,
                categories,
                filter,
                setFilter,
                getClassById,
                classInfo,
                setClassInfo,
                getCategories,
                getCategorieById,
                categoryId,
                updateClass,
                updated
            }}
        >
            { children }
        </ClassesContext.Provider>
    )
}