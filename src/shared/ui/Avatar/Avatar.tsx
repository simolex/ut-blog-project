import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Mods } from '@/shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size } = props;
    const mods: Mods = {};

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
            className={classNames(styles.avatar, mods, [className])}
            style={stylesImg}
        />
    );
});
