import { useContext } from "react";
import AppContext from "../contexts/appContext";

export default function useApp() {
    const { isAuthenticated } = useContext(AppContext);
    return { isAuthenticated }
}