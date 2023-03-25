import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

const NotFound: FC<NotFoundProps> = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <PageWrapper className={classNames(styles.notFound, {}, [className])}>
            {t('NotFound')}
        </PageWrapper>
    );
};

export default NotFound;
