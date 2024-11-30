import React, { createContext } from "react";

const AppContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: null
});

export default AppContext;