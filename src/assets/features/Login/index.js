import React from "react";

export default function Login() {
    return (
        <>
            <nav>LOGIN</nav>
            <form className="form-login">
                <div>
                    <label>
                        E-mail
                    </label>
                    <input
                        className="inpt-email"
                        type="text"
                        placeholder="Digite o seu e-mail" />
                </div>
                <div>
                    <label>
                        Senha
                    </label>
                    <input
                        className="inpt-senha"
                        type="password"
                        placeholder="Digite a sua senha" />
                </div>
            </form>
            <footer>RODA PAGE</footer>
        </>
    )
}

