import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (username: string) => {
            dispatch(loginActions.setUsername(username));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (password: string) => {
            dispatch(loginActions.setPassword(password));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Text title={t('auth-form')} />
            {error && <Text title={t('error')} text={error} variant={TextVariant.ERROR} />}
            <Input
                placeholder={t('username')}
                className={classNames(styles.input)}
                type="text"
                onChange={onChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                placeholder={t('password')}
                className={classNames(styles.input)}
                type="text"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={classNames(styles.loginBtn)}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('signin')}
            </Button>
        </div>
    );
});
