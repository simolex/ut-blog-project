import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { typedMemo } from '@/shared/types';
import { Card, CardVariant } from '@/shared/ui/deprecated/Card';
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

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;

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
