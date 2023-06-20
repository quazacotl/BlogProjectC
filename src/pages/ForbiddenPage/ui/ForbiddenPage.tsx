import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from 'react-i18next'
import {Page} from 'widgets/Page'

interface ForbiddenPageProps {
    className?: string
}
const ForbiddenPage = (props: ForbiddenPageProps) => {
    const {className} = props
    const {t} = useTranslation()
    return (
        <Page className={classNames('', {}, [className])}>
            <h3>{t('Доступ запрещён')}</h3>
        </Page>
    );
};

export default ForbiddenPage