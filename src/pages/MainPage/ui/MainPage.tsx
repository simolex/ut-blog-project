/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return <div>{t('Главная')}</div>;
};

export default memo(MainPage);
