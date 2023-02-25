import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input
                placeholder={t('username')}
                className={classNames(styles.input)}
                type="text"
                autoFocus
            />
            <Input placeholder={t('password')} className={classNames(styles.input)} type="text" />
            <Button className={classNames(styles.loginBtn)}>{t('signin')}</Button>
        </div>
    );
};
