import {WeatherApiResponse} from "@/app/models/weatherapi/types";

const date = new Date();

function getDayName(timeStamp: number):string{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(timeStamp * 1000)
    return days[date.getDay()];
}

export interface WeatherApiUnitForecastDay {
    date: string
    dayName: string
    maxtemp_c: number,
    mintemp_c: number,
    condition: {
        text: string,
        icon: string,
    }
    sunrise: string,
    sunset: string,
}

export class WeatherApiUnit {
    location_name: string
    location_county: string
    current_temp: number
    current_feels_like: number
    current_condition: {
        text: string,
        icon: string,
    }
    forecast: Array<WeatherApiUnitForecastDay>
    constructor(unit: WeatherApiResponse) {
        const {location, current, forecast} = unit
        this.location_name = location.name
        this.location_county = location.country
        this.current_temp = current.temp_c
        this.current_feels_like = current.feelslike_c
        this.current_condition = {
            text: current.condition.text,
            icon: `https:${current.condition.icon}`
        }
        this.forecast = forecast.forecastday.slice(1).map(forecastday => {
            const {day, astro, date, date_epoch} = forecastday
            return {
                date,
                dayName: getDayName(date_epoch),
                maxtemp_c: day.maxtemp_c,
                mintemp_c: day.mintemp_c,
                sunrise: astro.sunrise,
                sunset: astro.sunset,
                condition: {
                    text: day.condition.text,
                    icon: `https:${day.condition.icon}`
                }
            }
        })
    }
}