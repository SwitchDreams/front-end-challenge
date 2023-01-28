import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import SubmitButton from "../../Components/Button";
import Loading from "../../Components/Loading";
import { ClassesContext } from "../../Contexts/ClassesContexts";
import Token from "../../Utils/token";
import style from "./styles";

export default function ClassInfo() {
    const { getClassById, classInfo } = useContext(ClassesContext);

    const { id } = useParams();
    const token = Token();
    const navigate = useNavigate();

    useEffect(() => {
        getClassById(token, id);
    }, []);

    console.log(classInfo.id)

    return (
        <style.Container>
            <style.Header>
                <div onClick={() => navigate("/homepage")}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
            </style.Header>
            {
                classInfo.id != undefined ?
                <>
                    <style.Class>
                        <h1>{classInfo.name}</h1>
                        <img src="../../../public/danca.jpg" />
                        <p><b>Professor(a)</b>: {classInfo.teacher_name}</p>
                        <p><b>Duração</b>: {classInfo.duration} min</p>
                        <p><b>Descrição</b>: {classInfo.description}</p>
                    </style.Class>
                    <style.Footer>
                        <SubmitButton label="Editar" disabled={false}/>
                    </style.Footer>
                </>
                :
                <div className="loading">
                    <Loading />
                </div>
            }
        </style.Container>
    )
}