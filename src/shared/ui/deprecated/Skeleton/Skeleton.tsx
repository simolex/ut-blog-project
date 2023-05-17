import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const css: CSSProperties = {
        height,
        width,
        borderRadius: border,
    };

    return <div className={classNames(styles.skeleton, {}, [className])} style={css} />;
});
