import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;

    .loading {
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Form = styled.form`
    width: 90%;
    height: calc(100vh - 70px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 120px;

    input {
        width: 100%;
        height: 50px;
        border: none;
        border-bottom: 1px solid #F87C0F;
        box-sizing: border-box;
        margin-bottom: 10px;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        text-align: left;
        color: #676767;
        background-color: #D9D9D9;
    }

    div {
        width: 100%;
        height: 50px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #676767;

        button {
            width: 90%;
            position: absolute;
            bottom: 40px;
        }

        select {
            width: 100%;
            height: 50px;
            border: none;
            background-color: #D9D9D9;
            border-bottom: 1px solid #FB9759;
            box-sizing: border-box;
            margin-bottom: 10px;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: left;
            color: #676767;
        }
    }
`

const style = {
    Container,
    Form
}

export default style;