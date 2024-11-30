import { useState, useEffect } from "react";

function useSearchButton(initialTime, seekOpportunity) {
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

    const search_time = Number.parseInt(process.env.REACT_APP_SEARCH_TIME)

    useEffect(() => {
        if (!isActive) return;

        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setIsActive(false);
                    return initialTime;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isActive, initialTime]);


    function handleSeekOpportunity() {
        setLoading(true);
        setIsActive(true);

        setTimeout(() => {
            setLoading(false);
            seekOpportunity()
        }, search_time * 1000);
    }

    return { handleSeekOpportunity, timeRemaining, loading, isActive }
}

export default useSearchButton;