import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { VStack } from '@/@/shared/ui';
import { Button, ButtonSize, ButtonTheme } from '@/@/shared/ui';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

import styles from './Sidebar.module.scss';

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
        <aside
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
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
            <VStack as="ul" role="navigation" gap="8" className={styles.itemList}>
                {itemList}
            </VStack>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
});
