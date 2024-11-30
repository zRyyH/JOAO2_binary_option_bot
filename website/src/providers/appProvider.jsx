import React, { useState } from "react";
import AppContext from '../contexts/appContext'
import App from "../app";


const AppProvider = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    return (
        <AppContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }}>
            <App />
        </AppContext.Provider>
    );
};


export default AppProvider;