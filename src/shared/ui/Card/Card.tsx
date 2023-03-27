import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Card.module.scss';

export enum CardVariant {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
}

export const Card = memo((props: CardProps) => {
    const { className, children, variant = CardVariant.NORMAL, ...otherProps } = props;

    return (
        <div className={classNames(styles.card, {}, [className, styles[variant]])} {...otherProps}>
            {children}
        </div>
    );
});
