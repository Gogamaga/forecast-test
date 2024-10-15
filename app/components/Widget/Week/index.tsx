'use client'

import React from "react";
import BasicInfo from "@/app/components/BasicInfo";
import {WeatherApiUnit} from "@/app/models/weatherapi";
import ExtendedInfo from "@/app/components/ExtendedInfo";
import styles from './styles.module.css'
import Skeleton from "@/app/components/Skeleton";

export default function Week(props: WeatherApiUnit): React.ReactNode {
    return (
        <div className={styles.container}>
            <Skeleton>
                <div className={styles.infoContainer}>
                    <p className={styles.location}>{props.location_name}/{props.location_county}</p>
                    <div className={styles.forecastContainer}>
                        <div className={styles.basicInfoContainer}>
                            <BasicInfo {...props}/>
                        </div>
                        <div className={styles.nextDayContainer}>
                            {props.forecast?.map(day => {
                                return  <ExtendedInfo key={day.date} {...day}/>
                            })}
                        </div>
                    </div>
                </div>
            </Skeleton>
        </div>
    )
}