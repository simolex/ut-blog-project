import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';
import { Counter } from '@/entities/Counter';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');
    return (
        <PageWrapper data-testid="AboutPage">
            {t('О сайте')}
            <Counter />
        </PageWrapper>
    );
};

export default memo(AboutPage);
