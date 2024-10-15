'use client'

import React from "react";
import {WeatherApiUnit} from "@/app/models/weatherapi";
import styles from './styles.module.css'

export default function BasicInfo(props: WeatherApiUnit): React.ReactNode {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.icon} src={props.current_condition.icon} alt="img"/>
            </div>
            <p>{props.current_condition.text} </p>
            <p>{props.current_temp}</p>
            <p>Feels: {props.current_feels_like}</p>
        </div>
    )
}