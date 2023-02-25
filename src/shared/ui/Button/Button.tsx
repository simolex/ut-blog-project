import { ButtonHTMLAttributes, FC } from 'react';
import { ValueOf } from 'shared/config/typeEnum/typeEnum';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export type ButtonTheme = ValueOf<typeof ButtonTheme>;

export const ButtonTheme = {
    CLEAR: 'clear',
    OUTLINE: 'outline',
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(styles.button, mods, [className, styles[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
