import { ButtonHTMLAttributes, ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import { ValueOf } from '@/shared/config/typeEnum/typeEnum';
import { classNames } from '@/shared/lib/classNames';
import { Mods } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export type ButtonTheme = ValueOf<typeof ButtonTheme>;

export const ButtonTheme = {
    CLEAR: 'clear',
    OUTLINE: 'outline',
    OUTLINE_STRONG: 'outlineStrong',
    BACKGROUND: 'background',
    BACKGROUND_INVERTED: 'backgroundInverted',
} as const;

export type ButtonSize = ValueOf<typeof ButtonSize>;

export const ButtonSize = {
    M: 'size_m',
    L: 'size_l',
    XL: 'size_xl',
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        fullWidth,
        disabled,
        ...otherProps
    } = props;
    const mods: Mods = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    return (
        <button
            ref={ref}
            type="button"
            className={classNames(styles.button, mods, [className, styles[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
