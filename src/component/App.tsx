import {Suspense, useContext, useState} from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import '../styles/index.scss'
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";


export const App = () => {

const {toggleThem, theme} = useTheme();
    return (
        <div className={classNames('app', {'joindf': true}, [theme])}>
            <button onClick={toggleThem}> ToggleTheme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                        <Route path={'/about'} element={<AboutPageAsync />}/>
                        <Route path={'/'} element={<MainPageAsync />} />


                </Routes>
            </Suspense>
        </div>
    );
};

