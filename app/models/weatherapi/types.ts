export interface WeatherApiResponse {
        "location": {
            "name": string,
            "region": string,
            "country": string,
            "lat": number,
            "lon": number,
            "tz_id": string,
            "localtime_epoch": number,
            "localtime": string
        },
        "current": {
            "last_updated_epoch": number,
            "last_updated": string,
            "temp_c": number,
            "is_day": 0 | 1,
            "condition": {
                "text": string,
                "icon": string,
                "code": number
            },
            "wind_kph": number,
            "feelslike_c": number,
        },
        "forecast": {
            "forecastday": Array<ForecastDay>
        }
}

export interface ForecastDay{
    "date": string,
    "date_epoch": number,
    "day": {
        "maxtemp_c": number,
        "mintemp_c": number,
        "condition": {
            "text": string,
            "icon": string,
            "code": number
        },
    },
    "astro": {
        "sunrise": string,
        "sunset": string,
    }
}