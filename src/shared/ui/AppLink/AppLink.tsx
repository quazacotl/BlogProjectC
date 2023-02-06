import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, to, children, theme = AppLinkTheme.PRIMARY, ...rest} = props
    return (
        <Link {...rest} to={to} className={classNames(cls.appLink, {}, [className, cls[theme]]) }>
            {children}
        </Link>
    );
};