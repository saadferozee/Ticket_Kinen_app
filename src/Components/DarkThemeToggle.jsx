import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';
import { useEffect } from 'react';
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

const DarkThemeToggle = () => {

    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        const html = document.documentElement;
        if (darkTheme) {
            html.setAttribute("data-theme", "dark")
        } else {
            html.setAttribute("data-theme", "light")
        }
    }, [darkTheme])

    return (
        <button className='text-2xl text-[#D9C296] cursor-pointer' title='Click to change theme.' onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? <FaCloudMoon /> : <FaCloudSun />}</button>

    );
};

export default DarkThemeToggle;