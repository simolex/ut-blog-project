import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import AvatarIcon from '@/shared/assets/icons/avatar-20x20.svg';
import styles from './Avatar.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size = 30, fallbackInverted } = props;

    const stylesImg = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon Svg={AvatarIcon} width={size} height={size} inverted={fallbackInverted} />
    );

    return (
        <AppImage
            src={src}
            alt={alt}
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(styles.avatar, {}, [className])}
            style={stylesImg}
        />
    );
});
