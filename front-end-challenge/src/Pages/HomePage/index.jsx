import Classes from "../../Components/Classes"
import FilterBar from "../../Components/FilterBar"
import style from "./styles"

export default function HomePage() {
    return (
        <>
            <style.Header>
                <ion-icon name="log-out-outline"></ion-icon>
            </style.Header>
            <style.Container>
                <FilterBar />
                <Classes />
            </style.Container>
        </>
    )
}