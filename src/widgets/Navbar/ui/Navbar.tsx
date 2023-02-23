import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    const [isAuth, setIsAuth] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuth(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuth(true)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('signin')}
            </Button>
            <LoginModal
                isOpen={isAuth}
                onClose={onCloseModal}
            />
        </div>
    )
}
