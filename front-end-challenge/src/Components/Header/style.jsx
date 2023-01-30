import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #3F1881;
        display: flex;
        align-items: center;
        justify-content: center;

        ion-icon {
            font-size: 20px;
            color: white;
        }
    }
`
const style = {
    Header
}

export default style;