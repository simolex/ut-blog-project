import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import styles from './SidebarRedesigned.module.scss';

interface SidebarRedesignedProps {
    className?: string;
}

export const SidebarRedesigned = (props: SidebarRedesignedProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return <div className={classNames(styles.SidebarRedesigned, {}, [className])} />;
};
// TODO
