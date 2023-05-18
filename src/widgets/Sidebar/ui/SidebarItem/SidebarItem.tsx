import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { AppLink as AppLinkDeprecate, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import styles from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    size?: number;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed, size = 20 } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <AppLinkDeprecate
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(styles.item, { [styles.collapsed]: collapsed })}
                >
                    <item.Icon className={styles.iconItem} width={size} height={size} />
                    <span className={styles.linkItem}>{t(item.textSlug)}</span>
                </AppLinkDeprecate>
            }
            on={
                <AppLink
                    variant="primary"
                    to={item.path}
                    className={classNames(styles.item, { [styles.collapsed]: collapsed })}
                >
                    <Icon Svg={item.Icon} width={size} height={size} className={styles.iconItem} />
                    <span className={styles.linkItem}>{t(item.textSlug)}</span>
                </AppLink>
            }
        />
    );
});
