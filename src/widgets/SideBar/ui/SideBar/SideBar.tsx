import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SideBarProps {
    className?: string
}
export const SideBar = (props: SideBarProps) => {
    const {className} = props
    const [collapsed, setCollapsed] = useState(false)


    function onToggle() {
        setCollapsed(prev => !prev)
    }


    return (
        <div className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};