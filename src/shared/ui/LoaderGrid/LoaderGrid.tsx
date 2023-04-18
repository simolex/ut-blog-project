import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './LoaderGrid.module.scss';

interface LoaderGridProps {
    className?: string;
}

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
