import React from "react";
import styles from './index.module.css'
import useLogin from "../../hooks/useLogin";

export default function Login() {
    const { changeTraderId, login } = useLogin();

    return (
        <div className={styles.master} >
            <div className={styles.titleContainer} >
                <p className={styles.titleText} >Insira seu ID para ter acesso ao nosso bot.</p>
            </div>

            <div className={styles.inputContainer} >
                <input placeholder="Digite aqui seu ID" className={styles.idInput} onChange={changeTraderId} />
            </div>

            <div className={styles.loginButtonContainer} >
                <button className={styles.loginButton} onClick={login} >
                    <p className={styles.loginButtonText} >Logar</p>
                </button>
            </div>
        </div>
    )
}