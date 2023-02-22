import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
    const { t } = useTranslation('about')

    return (
        <div>
            <h1>{t('about page')}</h1>
        </div>
    )
}

export default AboutPage
