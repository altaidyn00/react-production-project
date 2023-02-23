import { memo, useEffect, useRef, useState, type InputHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    autoFocus?: boolean
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        autoFocus,
        type = 'text',
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>()

    useEffect(() => {
        if (autoFocus) ref.current?.focus()
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>
                {`${placeholder}>`}
            </div>}
            <div>
                <input
                    className={cls.input}
                    onChange={onChangeHandler}
                    value={value}
                    type={type}
                    autoFocus={autoFocus}
                    {...otherProps}
                />
            </div>
        </div >
    )
})
