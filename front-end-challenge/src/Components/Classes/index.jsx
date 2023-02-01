import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClassesContext } from "../../Contexts/ClassesContexts";
import Token from "../../Utils/token";
import style from "./styles"
import dance from "../../../public/danca.jpg"

export default function Classes(props) {
    const { name, description, id } = props;
    const { deleteClass } = useContext(ClassesContext);

    const token = Token();

    const navigate = useNavigate();

    function OnSubmit(e) {
        deleteClass(token, id)
    }

    return (
        <style.Container onClick={() => navigate(`/classinfo/${id}`)}>
            <style.Class>
                <div className="delete" onClick={(e) => OnSubmit(e)}>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <img src={dance} alt="image"></img>
                <h1 className="name">{name}</h1>
                <p className="infos">{description}</p>
            </style.Class>
        </style.Container>
    )
}