'use client'

import React from "react";
import {WeatherApiUnit} from "@/app/models/weatherapi";
import BasicInfo from "@/app/components/BasicInfo";
import styles from "@/app/components/Widget/FewDays/styles.module.css";
import Skeleton from "@/app/components/Skeleton";
import ExtendedInfo from "@/app/components/ExtendedInfo";

export default function FewDays(props: WeatherApiUnit): React.ReactNode {
    return (
        <div className={styles.container}>
            <Skeleton>
                <div className={styles.infoContainer}>
                    <p className={styles.location}>{props.location_name}/{props.location_county}</p>
                    <div className={styles.forecastContainer}>
                        <div className={styles.basicInfoContainer}>
                            <BasicInfo {...props}/>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.nextDayContainer}>
                            {props.forecast?.slice(0, 2).map(day => {
                                return  <ExtendedInfo key={day.date} {...day}/>
                            })}
                        </div>
                    </div>
                </div>
            </Skeleton>
        </div>
    )
}