import { useNavigate } from "react-router-dom"
import style from "./style";

export default function Header(props) {
    const { goTo } = props;
    const navigate = useNavigate();

    return (
        <style.Header>
            <div onClick={() => navigate(`${goTo}`)}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
        </style.Header>
    )
}