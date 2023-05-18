import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import styles from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-icon-rd-20x20.svg';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 58 } = props;

    return (
        <HStack max justify="center" className={classNames(styles.appLogoWrapper, {}, [className])}>
            <Icon
                className={styles.appLogo}
                Svg={AppSvg}
                width={size}
                height={size}
                style={{
                    color: 'black',
                }}
            />
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
        </HStack>
    );
});
