import React from 'react'
import {useTranslation} from 'react-i18next'
import {Page} from 'shared/ui/Page/Page'

const MainPage = () => {
	const {t} = useTranslation('main')

	return (
		<Page>
			<h1>{t('Главная страница', {ns: 'main'})}</h1>
		</Page>
	)
}

export default MainPage