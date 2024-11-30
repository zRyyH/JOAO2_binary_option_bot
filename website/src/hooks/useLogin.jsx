import React, { useState } from "react";
import { loginService } from "../services/appServices";

function useLogin() {
    const [traderId, setTraderId] = useState('')

    const apiUrl = process.env.REACT_APP_API_URL;
    const influencer = process.env.REACT_APP_INFLUENCER;


    function changeTraderId(event) {
        setTraderId(event.target.value)
    }

    async function login() {
        const response = await loginService(apiUrl, '/event', traderId, influencer)
        console.log(response)
    }

    return { traderId, changeTraderId, login }
}

export default useLogin;