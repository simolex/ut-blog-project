import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LoaderGrid } from 'shared/ui/LoaderGrid/LoaderGrid';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(styles.pageLoader, {}, [className])}>
        <LoaderGrid />
    </div>
));
