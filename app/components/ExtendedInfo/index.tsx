'use client'
import styles from './styles.module.css'
import React from "react";
import {WeatherApiUnitForecastDay} from "@/app/models/weatherapi";

export default function ExtendedInfo(props: WeatherApiUnitForecastDay) {
    const {condition, mintemp_c, maxtemp_c, sunset, sunrise, dayName} = props
    return (
        <div className={styles.container}>
            <div >
                <p>{dayName}</p>
                <img className={styles.icon} src={condition.icon} alt="img"/>
            </div>
            <p className={styles.maxTemp}>Max: {maxtemp_c}</p>
            <p className={styles.minTemp}>Min: {mintemp_c}</p>
            <div className={styles.astroContainer}>
                <span>E: {sunset}</span>
                <span>W: {sunrise}</span>
            </div>
        </div>
    )
}