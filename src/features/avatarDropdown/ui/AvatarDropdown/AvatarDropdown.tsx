/* eslint-disable indent */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getIsAdmin, getIsManager, getUserAuthData, userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const authDate = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authDate) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                {
                    id: 'profile',
                    content: t('profile'),
                    href: getRouteProfile(authDate.id),
                },
                ...(isAdminPanelAvailable
                    ? [
                          {
                              id: 'admin_panel',
                              content: t('admin_panel'),
                              href: getRouteAdminPanel(),
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
    );
});
