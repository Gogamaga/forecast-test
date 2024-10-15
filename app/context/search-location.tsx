'use client'
import {createContext, useState} from "react";

export const SearchLocationContext = createContext({
    query: '',
    setQuery: (query: string) => {}
});

export const SearchLocationProvider = ({ children }: {children: React.ReactNode}) => {
    const [query, setQuery] = useState('');
    return (
        <SearchLocationContext.Provider value={{query, setQuery}}>
            {children}
        </SearchLocationContext.Provider>
    );
};