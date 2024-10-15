'use client'
import {createContext, useState} from "react";

export const LoadingForecastContext = createContext({
    loading: true,
    setLoading: (loading: boolean) => {}
});

export const LoadingForecastProvider = ({ children }: {children: React.ReactNode}) => {
    const [loading, setLoading] = useState(true);
    return (
        <LoadingForecastContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingForecastContext.Provider>
    );
};