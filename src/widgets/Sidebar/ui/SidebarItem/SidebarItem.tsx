import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/item';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={styles.item}>
            <item.Icon className={styles.iconItem} />
            <span className={styles.linkItem}>{t(item.textSlug)}</span>
        </AppLink>
    );
};
