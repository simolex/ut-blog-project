import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size } = props;

    const stylesImg = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(styles.avatar, {}, [className])}
            style={stylesImg}
        />
    );
});
