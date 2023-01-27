import style from "./styles"

export default function Classes(props) {
    const { name, description } = props;

    return (
        <style.Container>
            <style.Class>
                <img src="../../../public/danca.jpg" alt="image"></img>
                <h1 className="name">{name}</h1>
                <p className="infos">{description}</p>
            </style.Class>
        </style.Container>
    )
}