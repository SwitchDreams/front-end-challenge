import { useState } from "react"
import style from "./styles"
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../Components/Button";

export default function SignUp() {
    const [ disabled, setDisabled ] = useState(false);
    const [ hiddenPassword, setHiddenPassword ] = useState(false);
    const [ hiddenRepetedPassword, setHiddenRepetedPassword ] = useState(false);


    const navigate = useNavigate();

    function OnSubmit() {

    }

    return (
        <style.Container>
            <style.Logo>
                <ion-icon name="caret-forward-outline"></ion-icon>
                <h1> Fit Dreams</h1>
            </style.Logo>
            <style.SignUp>
                <style.Form onSubmit = {OnSubmit}>
                    <input
                        // disabled = {disabled}
                        type = "text"
                        // value = {username}
                        placeholder = "Nome"
                        autoComplete="on"
                        required
                        // onChange = {(e) => setSignUp({...signUp, username: e.target.value})}
                    />
                    <input 
                        // disabled = {disabled}
                        type = "email"
                        // value = {email}
                        placeholder = "Email"
                        autoComplete="on"
                        required
                        // onChange = {(e) => setSignUp({...signUp, email: e.target.value})}
                    />
                    <div>
                        <input className="password"
                            // disabled = {disabled}
                            type = { hiddenPassword ? "password" : "text"}
                            // value = {password}
                            pattern = "[0-9a-zA-Z$*_/@#]{4,}"
                            title = "A senha deve conter no mínimo 4 caracteres"
                            placeholder = "Senha"
                            required
                            // onChange = {(e) => setSignUp({...signUp, password: e.target.value})}
                        />
                        {!hiddenPassword ? 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-outline"></ion-icon> 
                            : 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-off-outline"></ion-icon>
                        }
                    </div>
                    <div>
                        <input
                            // disabled = {disabled}
                            type = { hiddenRepetedPassword ? "password" : "text"}
                            // value = {repeatedPassword}
                            // pattern = {password}
                            title = "Digite senhas iguais"
                            placeholder = "Confirme sua senha"
                            required
                            // onChange = {(e) => setSignUp({...signUp, repeatedPassword: e.target.value})}
                        >
                        </input>
                        {!hiddenRepetedPassword ? 
                            <ion-icon onClick={() => setHiddenRepetedPassword(!hiddenRepetedPassword)} name="eye-outline"></ion-icon> 
                            : 
                            <ion-icon onClick={() => setHiddenRepetedPassword(!hiddenRepetedPassword)} name="eye-off-outline"></ion-icon>
                        }
                    </div>
                    <SubmitButton label="Cadastre-se"></SubmitButton>
                    <style.SignIn onClick={() => navigate("/")}>Já possui cadastro? Faça login!</style.SignIn>
                </style.Form >
            </style.SignUp>
        </style.Container>
    )
}