'use client'
import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import {Switch} from "antd";
import Widget from "@/app/components/Widget";
import {WeatherApiUnit} from "@/app/models/weatherapi";
import {WeatherApiResponse} from "@/app/models/weatherapi/types";
import {SearchLocationContext} from "@/app/context/search-location";
import {LoadingForecastContext} from "@/app/context/loading-forecast";
import {ErrorFetchingContext} from "@/app/context/error-fetching";
import styles from './styles.module.css'

interface Location {
    latitude: null | number
    longitude: null | number
}

const currentLocation: Location = {
    latitude: null,
    longitude: null,
}

navigator.geolocation.getCurrentPosition((position) => {
    const {latitude, longitude} = position.coords
    currentLocation.latitude = latitude
    currentLocation.longitude = longitude
});

function getSearchForecastQuery(query: string, latitude: number, longitude: number): string {
    if(query){
        return query;
    }
    return `${latitude},${longitude}`
}

export default function Dashboard(): React.ReactNode{
    const [data, setData] = useState({})
    const [isDark, setDark] = useState<boolean>(true)
    const {query} = useContext(SearchLocationContext)
    const {setLoading} = useContext(LoadingForecastContext)
    const {error, setError} = useContext(ErrorFetchingContext)

    useEffect(() => {
        const {latitude, longitude} = currentLocation
        if (latitude && longitude){
            axios.get(`https://api.weatherapi.com/v1/forecast.json?q=${getSearchForecastQuery(query, latitude, longitude)}&days=7&key=5c6ed90a10e243da99b174411240910`)
                .then((res: {data:WeatherApiResponse}) => {
                    const data = new WeatherApiUnit(res.data)
                    setData(data)
                    if(error){
                      setError(false)
                    }
                    setLoading(false)
                })
                .catch(() => setError(true))
        }
    }, [currentLocation, query]);

    function switchTheme(checked: boolean) {
        setDark(checked)
    }

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark])
    return <div className={styles.widgetsContainer}>
        <div className={styles.switchContainer}>
            <Switch checkedChildren="Dark" unCheckedChildren="Light" defaultChecked onChange={switchTheme} />
        </div>
        <div className={styles.nowContainer}><Widget widgetSize={'now'} {...data}/></div>
        <div className={styles.fewDaysContainer}><Widget widgetSize={'few-days'} {...data}/></div>
        <div className={styles.weekContainer}><Widget widgetSize={'weekly'} {...data}/></div>
    </div>
}