import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './LoaderGrid.module.scss';

interface LoaderGridProps {
    className?: string;
}

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const LoaderGrid = memo(({ className }: LoaderGridProps) => (
    <div className={classNames(styles.loaderGrid, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));
