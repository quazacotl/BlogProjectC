import React, {Suspense} from 'react';
import './styles/index.scss'
import {Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {routeConfig} from "app/providers/appRouter/config/routeConfig";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
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