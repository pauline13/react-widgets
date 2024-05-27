import { FC, ReactNode, useEffect, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProprs {
    children: ReactNode;
}

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProprs> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // useEffect(() => {
    //     document.body.classList.remove(Theme.LIGHT, Theme.DARK);
    //     document.body.classList.add(theme);
    // }, [theme]);

    useEffect(() => {
        setTheme(defaultTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
