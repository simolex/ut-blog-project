import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextVariant {
    NORMAL = 'normal',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
}

export const Text = memo((props: TextProps) => {
    const { className, title, text, variant = TextVariant.NORMAL } = props;

    return (
        <div className={classNames(styles.text, {}, [className, styles[variant]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.textContent}>{text}</p>}
        </div>
    );
});
