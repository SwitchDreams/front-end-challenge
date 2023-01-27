import { useContext, useEffect } from "react"
import Classes from "../../Components/Classes"
import FilterBar from "../../Components/FilterBar"
import Loading from "../../Components/Loading"
import { ClassesContext } from "../../Contexts/ClassesContexts"
import Token from "../../Utils/token"
import style from "./styles"

export default function HomePage() {
    const { getClasses, classesInfos } = useContext(ClassesContext);
    const token = Token();

    useEffect(() => {
        getClasses(token);
    },[]);


    return (
        <>
            <style.Header>
                <ion-icon name="log-out-outline"></ion-icon>
            </style.Header>
            <style.Container>
                <FilterBar />
                {
                    classesInfos.length > 0 ? 
                    <>
                    {
                        classesInfos.map((answer) => 
                            <Classes description={answer.description} name={answer.name}/>
                        )
                    }
                    </>
                    :
                    <div className="loading">
                        <Loading />
                    </div>
                }
            </style.Container>
        </>

    )
}