/* eslint-disable indent */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/authByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextVariant } from '@/shared/ui/deprecated/Text';
import styles from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <header className={classNames(styles.navbar, {}, [className])}>
                        <Text
                            variant={TextVariant.INVERTED}
                            className={styles.appName}
                            title={t('app-name')}
                        />

                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            to={getRouteArticleCreate()}
                            className={styles.newArticle}
                        >
                            {t('create-new-article-nb')}
                        </AppLink>
                        <HStack gap="16" className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                on={
                    <header className={classNames(styles.navbarRedesigned, {}, [className])}>
                        <HStack gap="16" className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }
    return (
        <header className={classNames(styles.navbar, {}, [className])}>
            <Text variant={TextVariant.INVERTED} className={styles.appName} title={t('app-name')} />
            <Button theme={ButtonTheme.CLEAR} className={styles.links} onClick={onShowModal}>
                {t('signin')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
};
const memoNavbar = memo(Navbar);
export { memoNavbar as Navbar };
