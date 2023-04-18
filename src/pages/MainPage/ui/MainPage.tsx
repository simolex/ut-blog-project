/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return <PageWrapper>{t('Главная')}</PageWrapper>;
};

export default memo(MainPage);
