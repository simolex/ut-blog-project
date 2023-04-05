import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { typedMemo } from 'shared/types';
import { Card, CardVariant } from 'shared/ui/Card/Card';
import styles from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;
    const { t } = useTranslation();
    const mods: Mods = {};

    const clickHandle = useCallback(
        (tab: TabItem<T>) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(styles.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    variant={tab.value === value ? CardVariant.NORMAL : CardVariant.OUTLINED}
                    className={styles.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
