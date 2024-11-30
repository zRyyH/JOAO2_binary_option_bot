import React from "react";
import styles from './index.module.css'
import { ClipLoader } from "react-spinners";
import useSearchButton from "../../hooks/useSearchButton";

const CountdownTimer = ({ initialTime, seekOpportunity }) => {
    const { handleSeekOpportunity, timeRemaining, loading, isActive } = useSearchButton(initialTime, seekOpportunity);

    return (
        <button
            className={isActive ? styles.searchButtonBlock : styles.searchButton}
            onClick={handleSeekOpportunity}
            disabled={isActive}>

            <ClipLoader color="#fff" loading={loading} size={25} />

            <p className={styles.searchButtonText} style={{ display: loading ? "none" : "flex" }} >
                {isActive ? `Aguarde ${timeRemaining} segundos` : "Buscar Oportunidade"}
            </p>

        </button>
    );
};

export default CountdownTimer;