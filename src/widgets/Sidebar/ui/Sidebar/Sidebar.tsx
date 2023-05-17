import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { VStack as VStackDeprecated } from '@/shared/ui/deprecated/Stack';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

import styles from './Sidebar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <li key={item.path}>
                    <SidebarItem item={item} collapsed={collapsed} />
                </li>
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
                        className,
                    ])}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        type="button"
                        onClick={onToggle}
                        className={styles.collapseBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.XL}
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStackDeprecated as="ul" role="navigation" gap="8" className={styles.itemList}>
                        {itemList}
                    </VStackDeprecated>
                    <div className={styles.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        styles.sidebarRedesigned,
                        { [styles.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={styles.appLogo} />
                    <VStack as="ul" role="navigation" gap="8" className={styles.itemList}>
                        {itemList}
                    </VStack>
                </aside>
            }
        />
    );
});
