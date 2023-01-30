import { useParams } from "react-router-dom";
import style from "./styles";
import Header from "../../Components/Header";
import { useContext, useEffect, useState } from "react";
import SubmitButton from "../../Components/Button";
import { ClassesContext } from "../../Contexts/ClassesContexts";
import Loading from "../../Components/Loading";
import Token from "../../Utils/token";

export default function EditClass() {
    const [ disabled, setDisabled ] = useState(false);
    const { categories,
        getCategories, 
        getCategorieById, 
        categoryId,
        updateClass,
        updated
    } = useContext(ClassesContext);
    const [ infos, setInfos ] = useState({
        name: "",
        description: "",
        teacher_name: "",
        duration: "",
        category: "",
    });
    const {
        name,
        description,
        teacher_name,
        duration,
        category
    } = infos
    const { id, category_id } = useParams();
    const token = Token();

    useEffect(() => {
        getCategories(token);
        getCategorieById(category_id, token);
    }, [])

    async function OnSubmit(e) {
        setDisabled(true);
        e.preventDefault();
        await updateClass(token, id, infos);
        setDisabled(false);
    } 

    function HoursToMinutes() {
        const time = duration.split(":");
        const minutes = parseInt(time[0] * 60) + parseInt(time[1]);
        
        return (minutes)
    }

    return (
        <style.Container>
            <Header goTo={`/classinfo/${id}`} />
            {
                categories.length > 0 && categoryId != undefined ?
                    <style.Form onSubmit = {OnSubmit}>
                        <input
                            disabled = {disabled}
                            type = "text"
                            value = {name}
                            placeholder = "Nome da aula"
                            autoComplete="on"
                            onChange = {(e) => setInfos({...infos, name: e.target.value})}
                        />
                        <input 
                            disabled = {disabled}
                            type = "text"
                            value = {teacher_name}
                            placeholder = "Nome do professor"
                            autoComplete="on"
                            onChange = {(e) => setInfos({...infos, teacher_name: e.target.value})}
                        />
                        <div>
                            <input
                                disabled = {disabled}
                                type = "time"
                                value = {duration}
                                placeholder = "Duração"
                                onChange = {(e) => setInfos({...infos, duration: e.target.value})}
                            />
                        </div>
                        <div>
                            <select
                                disabled = {disabled}
                                type = "selection"
                                value = {category}
                                required
                                onChange = {(e) => setInfos({...infos, category: e.target.value})}>
                                    <option value={categoryId.id}>{categoryId.name}</option>
                                    {
                                        categories.map((info) => {
                                            if(info.id != categoryId.id) {
                                                return (
                                                    <option value = {info.id}>{info.name}</option>
                                                )
                                            }
                                        })
                                    }
                            </select>
                        </div>
                        <div>
                            <input
                                disabled = {disabled}
                                type = "text"
                                value = {description}
                                placeholder = "Descrição"
                                onChange = {(e) => setInfos({...infos, description: e.target.value})}
                            >
                            </input>
                        </div>
                        <div className="Button">
                            <SubmitButton label="Atualizar" disabled={disabled}></SubmitButton>
                        </div>
                    </style.Form >
                    :
                    <div className="loading">
                        <Loading />
                    </div>
            }
        </style.Container>
    )
}