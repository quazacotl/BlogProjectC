import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
import {SideBar} from "widgets/SideBar";
import {AppRouter} from "app/providers/appRouter";



const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <SideBar/>
                <AppRouter/>
            </div>
        </div>

    );
};

export default App;