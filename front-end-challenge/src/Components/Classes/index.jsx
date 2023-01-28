import { useNavigate } from "react-router-dom";
import style from "./styles"

export default function Classes(props) {
    const { name, description, id } = props;

    const navigate = useNavigate()

    return (
        <style.Container onClick={() => navigate(`/classinfo/${id}`)}>
            <style.Class>
                <img src="../../../public/danca.jpg" alt="image"></img>
                <h1 className="name">{name}</h1>
                <p className="infos">{description}</p>
            </style.Class>
        </style.Container>
    )
}