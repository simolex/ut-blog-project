import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return <div className={classNames(styles.notFound, {}, [className])}>{t('NotFound')}</div>;
};

export default NotFound;
