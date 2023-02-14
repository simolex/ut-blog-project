import { ButtonHTMLAttributes, FC } from 'react';
import { ValueOf } from 'shared/config/typeEnum/typeEnum';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export type ThemeButton = ValueOf<typeof ThemeButton>;

export const ThemeButton = {
    CLEAR: 'clear',
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            type="button"
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
