import React from 'react';
import ThemeContext from '../Contexts/ThemeContext';
import { useState } from 'react';
import { useEffect } from 'react';

const ThemeProvider = ({children}) => {

    // const [darkTheme, setDarkTheme] = useState(false);
    
    const [darkTheme, setDarkTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark'; 
    });
    
    useEffect(() => {
        if (darkTheme) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, [darkTheme]);
    
    const contexts = {
        darkTheme,
        setDarkTheme
    }

    return (
        <ThemeContext.Provider value={contexts}>
            {
               children 
            }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;