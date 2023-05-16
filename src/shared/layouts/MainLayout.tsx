import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, header, content, sidebar, toolbar } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.mainLayout, {}, [className])}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>
                <div className={styles.header}>{header}</div>
                <div className={styles.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
