/* eslint-disable indent */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getIsAdmin, getIsManager, getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/authByUsername';
import { classNames } from 'shared/lib/classNames';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authDate = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authDate) {
        return (
            <header className={classNames(styles.navbar, {}, [className])}>
                <Text
                    variant={TextVariant.INVERTED}
                    className={styles.appName}
                    title={t('app-name')}
                />

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                    className={styles.newArticle}
                >
                    {t('create-new-article-nb')}
                </AppLink>
                <Dropdown
                    className={styles.dropdown}
                    direction="bottom left"
                    items={[
                        {
                            id: 'profile',
                            content: t('profile'),
                            href: RoutePath.profile + authDate.id,
                        },
                        ...(isAdminPanelAvailable
                            ? [
                                  {
                                      id: 'admin_panel',
                                      content: t('admin_panel'),
                                      href: RoutePath.admin_panel,
                                  },
                              ]
                            : []),
                        {
                            id: 'logout',
                            content: t('logout'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authDate.avatar} />}
                />
            </header>
        );
    }
    return (
        <header className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={styles.links} onClick={onShowModal}>
                {t('signin')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
