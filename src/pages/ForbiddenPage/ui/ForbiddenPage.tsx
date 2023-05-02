import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { PageWrapper } from '@/widgets/PageWrapper';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <PageWrapper data-testid="ForbiddenPage" className={classNames('', {}, [className])}>
            {t('access-denied')}
        </PageWrapper>
    );
};

export default memo(ForbiddenPage);
