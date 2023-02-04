import React, { Suspense } from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/mailPage/MailPage.async";
import {AboutPageAsync} from "./pages/aboutPage/AboutPage.async";


const App = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>

    );
};

export default App;