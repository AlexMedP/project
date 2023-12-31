import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

type ThemeProps = {
    children: React.ReactNode
}
const ThemeProvider: React.FC<PropsWithChildren> = ({children}:ThemeProps) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)



    const defaultProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme,

        }
    },[theme])
    return (
      <ThemeContext.Provider value={
          defaultProps
      }>
          {children}
      </ThemeContext.Provider>
    );
};

export default ThemeProvider;