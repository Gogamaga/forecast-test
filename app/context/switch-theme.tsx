'use client'
import {createContext, useState} from "react";

export const SwitchThemeContext = createContext({
    isDark: true,
    setTheme: (loading: boolean) => {}
});

export const SwitchThemeProvider = ({ children }: {children: React.ReactNode}) => {
    const [isDark, setTheme] = useState(true);
    return (
        <SwitchThemeContext.Provider value={{isDark, setTheme}}>
            {children}
        </SwitchThemeContext.Provider>
    );
};