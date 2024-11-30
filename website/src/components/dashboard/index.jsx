import React from "react";
import styles from './index.module.css'
import useDashboard from "../../hooks/useDashboard";
import cetaUp from "../../assets/seta-para-cima.png"
import cetaDown from "../../assets/seta-para-baixo.png"
import CountdownTimer from "../searchButton";

export default function Dashboard() {
    const {
        period,
        forex,
        entryTime,
        predict,
        changePeriod,
        seekOpportunity,
        error
    } = useDashboard()

    return (
        <div className={styles.master} >
            <div className={styles.titleContainer} >
                <p className={styles.titleText} >Opere nos ativos em OTC</p>
            </div>

            <div className={styles.splitContainer} />

            <div className={styles.selectContainer} >
                <div className={styles.splitContainer} />
                <p className={styles.titleText} >Selecione um periodo:</p>

                <select className={styles.selectPeriod} id="periodSelect" value={period} onChange={changePeriod}>
                    <option value={1}>1min</option>
                    <option value={5}>5min</option>
                </select>
            </div>

            <div className={styles.splitContainer} />

            <div className={styles.configContainer} >
                <div className={styles.infoContainer} >
                    <p className={styles.infoText}>{forex}</p>
                </div>

                <div className={styles.infoContainer} >
                    <p className={styles.infoText}>{period}min</p>
                </div>

                <div className={styles.infoContainer} >
                    <p className={styles.infoText}>{entryTime}</p>
                </div>
            </div>

            <div className={styles.splitContainer} />

            <div className={styles.predictContainer} >
                <div className={styles.cetaContainer} >
                    <img className={styles.cetaImg} src={cetaUp} />
                    <p className={styles.cetaText} >
                        {predict.down ? predict.down : "-"}
                    </p>
                </div>

                <div className={styles.cetaContainer} >
                    <img className={styles.cetaImg} src={cetaDown} />
                    <p className={styles.cetaText} >
                        {predict.up ? predict.up : "-"}
                    </p>
                </div>
            </div>

            <div className={styles.splitContainer} />

            <div className={styles.searchOption} >
                <CountdownTimer initialTime={10} seekOpportunity={seekOpportunity} />
            </div>

            <div className={styles.splitContainer} />

            <div className={styles.errorContainer} >
                <p className={styles.errorText} >{error}</p>
            </div>
        </div>
    )
}