import {classNames} from "shared/lib/classNames/classNames";
import cls from './AdminPanelPage.module.scss'
import {Page} from 'widgets/Page'
import {useTranslation} from 'react-i18next'

interface AdminPanelPageProps {
    className?: string
}
const AdminPanelPage = (props: AdminPanelPageProps) => {
    const {className} = props
    const {t} = useTranslation()

    return (
        <Page className={classNames(cls.adminPanelPage, {}, [className])}>
            <h4>{t('Панель администратора')}</h4>
        </Page>
    );
};

export default AdminPanelPage