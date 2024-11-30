import { useState } from "react";

export default function useDashboard() {
    const [period, setPeriod] = useState(1);
    const [forex, setForex] = useState("Ativo");
    const [entryTime, setEntryTime] = useState("Horário");
    const [predict, setPredict] = useState({ up: '', down: '' })
    const [error, setError] = useState('');

    const assets = [
        "AUD/JPY",
        "NZD/CAD",
        "EUR/USD",
        "USD/JPY",
        "EUR/JPY",
        "USD/CAD",
        "CHF/JPY",
        "AUD/CAD",
        "AUD/USD"
    ];

    function getNextRoundedTime() {
        const now = new Date();
        let minutes = now.getMinutes() + 1;
        let roundedMinutes = Math.ceil(minutes / Number.parseInt(period)) * Number.parseInt(period);

        if (roundedMinutes === 60) {
            roundedMinutes = 0;
            now.setHours(now.getHours() + 1);
        }

        now.setMinutes(roundedMinutes);
        now.setSeconds(0);
        now.setMilliseconds(0);

        return now;
    }

    function formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const changePeriod = (event) => {
        setPeriod(event.target.value);
    };

    const seekOpportunity = () => {
        setError('')

        if (getRandomInteger(0, 8) !== 8) {
            const percentOption = getRandomInteger(0, 100);
            const indiceAsset = getRandomInteger(0, 8);

            const asset = assets[indiceAsset]
            const up = String(percentOption)
            const down = String(100 - percentOption)
            const nextRoundTime = formatTime(getNextRoundedTime())

            setForex(asset)
            setEntryTime(nextRoundTime)
            setPredict({ up: up + '%', down: down + '%' })

            return true;
        } else {
            setForex('-')
            setEntryTime('-')
            setPredict({ up: '-', down: '-' })

            setError('Nenhuma oportunidade encontrada, aguarde alguns minutos e tente novamente mais tarde.')
            return false;
        }
    };

    return {
        period,
        forex,
        entryTime,
        predict,
        changePeriod,
        seekOpportunity,
        error
    }
}