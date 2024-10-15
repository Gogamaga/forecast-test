'use client'
import React from 'react'
import Now from "@/app/components/Widget/Now";
import FewDays from "@/app/components/Widget/FewDays";
import Week from "@/app/components/Widget/Week";
import {WeatherApiUnit} from "@/app/models/weatherapi";

interface IProps extends WeatherApiUnit{
    widgetSize: 'now' | 'few-days' | 'weekly'
}

export default function Widget(props: IProps): React.ReactNode {
    function getWidgetSize(): React.ReactNode {
        switch (props.widgetSize) {
            case "now":
                return <Now {...props}/>
            case "few-days":
                return <FewDays{...props}/>
            case "weekly":
                return <Week {...props}/>
        }
    }
    return (
        <div>
            {getWidgetSize()}
        </div>
    )
}