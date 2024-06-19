import { Button, Text } from "@mantine/core";
import styles from './styles.module.css'
import { MdOutlineWifiTethering } from "react-icons/md";
import { useState } from "react";

const RoundButton = ({label, icon, disabled, onClick}) => {
    const [loading, setLoading] = useState(false);
    
    const handleClick = async () => {
        setLoading(true);
        await onClick();
        setLoading(false);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.roundButtonContainer}>
                <Button onClick={handleClick} loading={loading} disabled={disabled} classNames={{root: styles.roundButton}}>
                    {icon}
                </Button>
            </div>
            <div className={styles.roundButtonLabelContainer}>
                <Text size="xl">{label}</Text>
            </div>
        </div>
    );
};

export { RoundButton };

// FIXME: Weird CSS when putting a few instances of this with different icons (some instances go downwards for no reason)
// Solved partially by putting the instances in a flexbox