'use client'
import {createContext, useState} from "react";

export const ErrorFetchingContext = createContext({
    error: false,
    setError: (error: boolean) => {}
});

export const ErrorFetchingProvider = ({ children }: {children: React.ReactNode}) => {
    const [error, setError] = useState(true);
    return (
        <ErrorFetchingContext.Provider value={{error, setError}}>
            {children}
        </ErrorFetchingContext.Provider>
    );
};