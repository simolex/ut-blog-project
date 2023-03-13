import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');
    return <div>{t('О сайте')}</div>;
};

export default memo(AboutPage);
