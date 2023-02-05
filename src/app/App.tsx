import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {routeConfig} from "app/providers/appRouter/config/routeConfig";



const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({path, element}) => (
                        <Route key={path} element={element}/>
                        )
                    )}
                </Routes>
            </Suspense>
        </div>

    );
};

export default App;