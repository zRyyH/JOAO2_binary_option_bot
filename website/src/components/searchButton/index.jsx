import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import styles from './index.module.css'

const CountdownTimer = ({ initialTime, seekOpportunity }) => {
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

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
    }, [isActive]);


    function handleSeekOpportunity() {
        setLoading(true);
        setIsActive(true);

        setTimeout(() => {
            setLoading(false);
            seekOpportunity()
        }, 3000);
    }

    return (
        <button
            className={styles.searchButton}
            onClick={handleSeekOpportunity}
            disabled={isActive}
            style={{ backgroundColor: isActive ? "#999" : "#28a745" }}>

            <ClipLoader color="#fff" loading={loading} size={25} />

            <p className={styles.searchButtonText} style={{ display: loading ? "none" : "flex" }} >
                {isActive ? `Aguarde ${timeRemaining} segundos` : "Buscar Oportunidade"}
            </p>

        </button>
    );
};

export default CountdownTimer;
