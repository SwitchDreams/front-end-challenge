import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    min-height: 30px;
    padding-top: 20px;
`
const Class = styled.div`
    width: 100%;
    height: 260px;
    border-radius: 10px;
    background-color: #d9d9d9;

    img {
        width: 100%;
        height: 70%;
        border-radius: 10px 10px 0px 0px;
        box-shadow: 0px 10px 20px -10px grey;
    }

    h1 {
        padding: 12px;
        font-size: 18px;
        font-weight: 500;
    }

    p {
        padding: 10px;
        font-size: 20;
        line-height: 10px;
    }

    div {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #F87C0F;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: absolute;
        margin: 10px;
        right: 20px;
        z-index: 3;
    }

`
const style = {
    Container,
    Class
}

export default style;