import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Classes from "../../Components/Classes"
import FilterBar from "../../Components/FilterBar"
import Loading from "../../Components/Loading"
import { ClassesContext } from "../../Contexts/ClassesContexts"
import Token from "../../Utils/token"
import style from "./styles"

export default function HomePage() {
    const {
        getClasses, 
        classesInfos,
        filter,
        setClassInfo
    } = useContext(ClassesContext);

    const navigate = useNavigate();
    const token = Token();

    useEffect(() => {
        getClasses(token);
        setClassInfo({});
    },[filter]);

    function Logout() {
        localStorage.setItem("user", JSON.stringify({
                token: "",
            }));
        navigate('/'); 
    }
    
    return (
        <>
            <style.Header>
                <ion-icon onClick={() => {Logout()}} name="log-out-outline"></ion-icon>
            </style.Header>
            <style.Container>
                <FilterBar />
                {
                    classesInfos.length > 0 ? 
                    classesInfos.map((answer) => 
                        {
                            if(answer.category_id == filter && filter != "") {
                                return (
                                    <Classes 
                                        description={answer.description} 
                                        name={answer.name}
                                        id={answer.id}
                                    />
                                )
                            }
                            if(filter == "") {
                                return (
                                    <Classes 
                                        description={answer.description} 
                                        name={answer.name}
                                        id={answer.id}
                                    />                                )
                            }
                        }
                    )
                    :
                    <div className="loading">
                        <Loading />
                    </div>
                }
            </style.Container>
        </>

    )
}