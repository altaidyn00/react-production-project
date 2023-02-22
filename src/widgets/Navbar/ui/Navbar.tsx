import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    const [isAuth, setIsAuth] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuth(!isAuth)
    }, [isAuth])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('signin')}
            </Button>
            <Modal isOpen={isAuth} onClose={onToggleModal} />
        </div>
    )
}
