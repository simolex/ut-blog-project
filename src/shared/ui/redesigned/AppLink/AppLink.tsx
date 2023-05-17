import { forwardRef, ReactNode, Ref } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import styles from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
}

export const AppLink = forwardRef((props: AppLinkProps, ref: Ref<HTMLAnchorElement>) => {
    const { to, className, variant = 'primary', children, ...otherProps } = props;

    return (
        <Link
            ref={ref}
            to={to}
            className={classNames(styles.appLink, {}, [className, styles[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
