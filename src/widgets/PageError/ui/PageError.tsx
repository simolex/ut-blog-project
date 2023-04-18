import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            <p>{t('undefined-error')}</p>
            <Button onClick={reloadPage}>{t('update-page')}</Button>
        </div>
    );
};
