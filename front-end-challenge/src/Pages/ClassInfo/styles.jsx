import styled from "styled-components";

const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .loading {
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
const Class = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    img {
        width: 100%;
        border-radius: 10px;
        padding-bottom: 30px;
    }

    h1 {
        width: 100%;
        height: auto;
        font-size: 25px;
        line-height: 60px;
        font-weight: 500;
    }

    p {
        width: 100%;
        font-size: 18px;
        line-height: 30px;

    }
`
const Footer = styled.footer`
    width: 90%;
    height: auto;
    position: absolute;
    bottom: 0;
    padding-bottom: 40px;
`
const style = {
    Container,
    Class,
    Footer
}

export default style