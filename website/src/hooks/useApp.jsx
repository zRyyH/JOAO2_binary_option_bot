import React, { useState } from "react";


export default function useApp() {
    const [isAuthenticated, setisAuthenticated] = useState(false);
    
    return { isAuthenticated }
}