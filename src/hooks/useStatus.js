import { useEffect, useState } from "react";
import {AsyncRepeater} from "../logic";
import {constants} from "../constants.js"

const useStatus = () => {
    const [status, setStatus] = useState({statusText: "LOADING", lastError: "NONE", lastTest: "Not done yet"});

    async function updateStatus() {
        try {
            const response = await fetch(constants.baseURL + "/status");
            const jsonResponse = await response.json();
            setStatus(jsonResponse);
        } catch {
            // Nothing
        }
    }

    useEffect(() => {
        const engine = new AsyncRepeater(1000, updateStatus);
        engine.start()

        return () => {engine.stop()}
    }, [])

    return status;
}

export {useStatus}