import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
