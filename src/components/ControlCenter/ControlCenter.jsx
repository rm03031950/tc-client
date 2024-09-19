import 'react';
import styles from './styles.module.css'
import { StatusPanel, RoundButton } from '../../components';
import { TbWifi, TbRadar, TbRouter } from "react-icons/tb";
import { Text } from '@mantine/core';
import { useState } from 'react';
import { useToggle } from '@mantine/hooks';
import { constants } from '../../constants';
import { useStatus } from '../../hooks/useStatus';

const nothing = async () => {
    console.log('hi')
    await (new Promise(resolve => {setTimeout(resolve, 1000)}))
    console.log('bye')
}

const ControlCenter = () => {
    let status = useStatus();
    const [flag, toggleFlag] = useToggle([1, 0]);

    const changeFlag = async () => {
        const request = await fetch(
            constants.baseURL + "/flag",
            {
                method: "POST",
                body: JSON.stringify(1 - flag)
            }
        )
        const response = await request.json()
        toggleFlag();
    }

    const startScan = async () => {
        const request = await fetch(
            constants.baseURL + "/scan"
        )
        const response = await request.json();
    }

    const testMode = async () => {
        const request = await fetch(
            constants.baseURL + "/test"
        )
        const response = await request.json();
    }

    return (
        <div style={{width: "25vw", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", minWidth: "400px"}}>
            <div style={{width: "100%", textAlign: "left", padding: "0 5%"}}>
                <Text size='xl'>{status.lastTest}</Text>
            </div>
            <StatusPanel status={status}/>
            <div style={{display: "flex", width: "100%",flexDirection: "row", justifyContent: "center", gap: "10%"}}>
                <RoundButton disabled={status.statusText !== "IDLE"} onClick={changeFlag} icon={<Text size='xl'>TX-{flag}</Text>} label={"Flag"} />
                <RoundButton disabled={status.statusText !== "IDLE"} onClick={startScan} icon={<TbWifi size={"3em"}/>} label={"Scan"} />
                <RoundButton disabled={status.statusText !== "IDLE"} onClick={testMode} icon={<TbRouter size={"3em"}/>} label={"Test"} />
            </div>
        </div>
    )
}

export {ControlCenter}