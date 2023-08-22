import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleThem: () => void,
    theme: Theme,
}
export function useTheme ():UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleThem = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme )
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {toggleThem, theme}
}




