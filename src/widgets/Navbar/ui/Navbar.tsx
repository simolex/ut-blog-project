import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authDate = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authDate) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR} className={styles.links} onClick={onLogout}>
                    {t('logout')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={styles.links} onClick={onShowModal}>
                {t('signin')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
});
