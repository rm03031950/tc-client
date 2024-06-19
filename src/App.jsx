import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { MdOutlineWifiTethering } from "react-icons/md";
import { TbWifi, TbRadar, TbRouter } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { RoundButton, StatusPanel, ControlCenter } from "./components";
import './globals.css'
import '@mantine/core/styles.css';

import { MantineProvider, Text } from '@mantine/core';

function App() {
    return (
        <>
            <MantineProvider defaultColorScheme="dark">
                {/* <RoundButton>
                    <TbWifi size={"1em"}/>
                </RoundButton> */}
                {/* <RoundButton>
                    <FaWifi size={"1.8em"}></FaWifi>
                </RoundButton> */}
                {/* <RoundButton>
                    <FaWifi size={"1.8em"}></FaWifi>
                </RoundButton> */}
                <ControlCenter />
            </MantineProvider>
        </>
    );
}

export default App;
