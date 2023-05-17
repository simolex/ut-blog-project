import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import styles from './Card.module.scss';

export enum CardVariant {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    fullWidth?: boolean;
}

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const Card = memo((props: CardProps) => {
    const { className, children, variant = CardVariant.NORMAL, fullWidth, ...otherProps } = props;

    const mods: Mods = {
        [styles.fullWidth]: fullWidth,
    };

    return (
        <div
            className={classNames(styles.card, mods, [className, styles[variant]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
