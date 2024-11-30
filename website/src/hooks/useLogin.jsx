import React, { useState, useContext } from "react";
import { loginService } from "../services/appServices";
import AppContext from "../contexts/appContext";


function useLogin() {
    const [traderId, setTraderId] = useState('')
    const { setIsAuthenticated } = useContext(AppContext)

    const apiUrl = process.env.REACT_APP_API_URL;
    const influencer = process.env.REACT_APP_INFLUENCER;

    function changeTraderId(event) {
        setTraderId(event.target.value)
    }

    async function login() {
        const response = await loginService(apiUrl, '/event', traderId, influencer)

        if (response === true) {
            setIsAuthenticated(response)
        } else {
            setIsAuthenticated(response)
            alert('Trader ID invalido !')
        }
    }

    return { traderId, changeTraderId, login }
}

export default useLogin;