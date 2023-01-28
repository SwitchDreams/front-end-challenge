import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: #3F1881;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ion-icon {
        font-size: 30px;
        color: white;
        padding: 10px;
    }
`
const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .loading {
        width: 100%;
        height: 100%;
        display: flex;
        margin-top: 300px;
        justify-content: center;
    }
`
const style = {
    Header,
    Container
}

export default style;