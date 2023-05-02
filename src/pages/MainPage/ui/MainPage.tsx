/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';
import { RatingCard } from '@/entities/Rating';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <PageWrapper data-testid="MainPage">
            {t('Главная')}
            <RatingCard
                title="Как вам статья?"
                feedbackTitle="Оставьте отзыв о статье"
                hasFeedback
            />
        </PageWrapper>
    );
};

export default memo(MainPage);
