import 'react'
import { useState } from 'react'
import { Text } from '@mantine/core'
import { useStatus } from '../../hooks'
import styles  from './styles.module.css'

const StatusPanel = ({status}) => {

    return (
        <div className={styles.statusPanelWrapper}>
            <Text className={`${styles.statusText} ${styles.borderBox}`}>
                {status.statusText}
            </Text>
            <Text className={`${styles.lastError} ${styles.borderBox}`}>
                {status.lastError}
            </Text>
        </div>
    );
}

export {StatusPanel}