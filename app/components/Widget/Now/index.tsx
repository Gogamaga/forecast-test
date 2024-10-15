'use client'
import React from 'react'
import BasicInfo from "@/app/components/BasicInfo";
import {WeatherApiUnit} from "@/app/models/weatherapi";

import styles from './styles.module.css'
import Skeleton from "@/app/components/Skeleton";

export default function Today(props: WeatherApiUnit): React.ReactNode {
    return (
        <div className={styles.container}>
            <Skeleton>
                <p className={styles.location}>{props.location_name}/{props.location_county}</p>
                <BasicInfo {...props}/>
            </Skeleton>
        </div>
    )
}