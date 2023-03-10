import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t(short ? 'short lang' : 'lang')}
            </Button>
        </div>
    )
}
