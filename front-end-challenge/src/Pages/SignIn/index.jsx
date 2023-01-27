import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../Components/Button";
import { ClassesContext } from "../../Contexts";
import MessageAlert from "../../Components/Alert";
import style from "./styles";

export default function SignUp() {
    const { 
        postSignIn,
        erroSignIn,
        setErroSignIn
    } = useContext(ClassesContext);

    const [ disabled, setDisabled ] = useState(false);
    const [ hiddenPassword, setHiddenPassword ] = useState(true);
    const [ signIn, setSignIn ] = useState({
        email: "",
        password: "",
    });
    const { 
        email, 
        password, 
    } = signIn;

    const navigate = useNavigate();

    function OnSubmit(e) {
        setDisabled(true);
        e.preventDefault();
        postSignIn(signIn);
        setDisabled(false);
    }

    console.log(erroSignIn)
    return (
        <style.Container>
            <style.Logo>
                <ion-icon name="caret-forward-outline"></ion-icon>
                <h1> Fit Dreams</h1>
            </style.Logo>
            <style.SignIn>
                <style.Form onSubmit = {OnSubmit}>
                    <input
                        disabled = {disabled}
                        type = "email"
                        value = {email}
                        placeholder = "Email"
                        autoComplete="on"
                        required
                        onChange = {(e) => setSignIn({...signIn, email: e.target.value})}
                    />
                    <div>
                        <input className="password"
                            disabled = {disabled}
                            type = { hiddenPassword ? "password" : "text"}
                            value = {password}
                            pattern = "[0-9a-zA-Z$*_/@#]{4,}"
                            title = "A senha deve conter no mínimo 4 caracteres"
                            placeholder = "Senha"
                            required
                            onChange = {(e) => setSignIn({...signIn, password: e.target.value})}
                        />
                        {
                            !hiddenPassword ? 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-outline"></ion-icon> 
                            : 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-off-outline"></ion-icon>
                        }
                    </div>
                    <SubmitButton label="Entrar" ></SubmitButton>
                    <style.SignUp onClick={() => navigate("/signup")}>Primeira vez? Cadastre-se!</style.SignUp>
                </style.Form >
            </style.SignIn>
            {
                erroSignIn ?
                <MessageAlert 
                    label="Verifique se seus dados então corretos"
                    disabled={erroSignIn}
                    setDisabled={setErroSignIn}
                    severity="error"
                ></MessageAlert>
                :
                <></>
            }
        </style.Container>
    )
}