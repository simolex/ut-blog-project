import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Mods } from 'shared/lib/classNames/classNames';
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

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const { className, title, text, variant = TextVariant.NORMAL, align = TextAlign.LEFT } = props;

    return (
        <div className={classNames(styles.text, {}, [className, styles[variant], styles[align]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.textContent}>{text}</p>}
        </div>
    );
});
