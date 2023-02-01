import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #3F1881;
`
const Logo = styled.div`
    width: 100%; 
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    ion-icon {
        color: #F87C0F;
        font-size: 120px;
    }

    h1 {
        font-size: 30px;
        font-weight: 700;
        color: white;
        letter-spacing: 1px;
        font-family: 'Outfit', sans-serif;
        padding-right: 35px;
    }

`
const SignUp = styled.div`
    width: 100%;
    height: 60%;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
    display: flex;
    align-items: center;
    flex-direction: center;
    box-sizing: border-box;
    padding: 50px;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

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
        color: grey;

        ion-icon {
            position: absolute;
            right: 13%;
            margin-bottom: 10px;
        }
    }
`
const SignIn = styled.p`
    margin-top: 20px;
    color: #676767;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    font-style: none;
    text-decoration: underline;
`
const style = {
    Container,
    Logo,
    SignUp,
    Form,
    SignIn
}

export default style;