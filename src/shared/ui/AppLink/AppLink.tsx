import { forwardRef, ReactNode, Ref } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = forwardRef((props: AppLinkProps, ref: Ref<HTMLAnchorElement>) => {
    const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props;

    return (
        <Link
            ref={ref}
            to={to}
            className={classNames(styles.appLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
