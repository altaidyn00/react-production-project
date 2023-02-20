import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <div className={classNames(cls.langSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('lang')}</Button>
        </div>
    )
}
