import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextVariant {
    NORMAL = 'normal',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = TextVariant.NORMAL,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div
            className={classNames(styles.text, {}, [
                className,
                styles[variant],
                styles[align],
                styles[size],
            ])}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.textContent}>{text}</p>}
        </div>
    );
});
