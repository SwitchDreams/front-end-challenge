import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    height: 30px;
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
        
    }

    h1 {
        padding: 10px;
        font-size: 18px;
        font-weight: 500;
    }

    p {
        padding: 10px;
        font-size: 20;
        line-height: 10px;
    }
`
const style = {
    Container,
    Class
}

export default style;