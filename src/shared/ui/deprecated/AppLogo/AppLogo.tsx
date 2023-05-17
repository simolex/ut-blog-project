import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Icon } from '@/shared/ui/deprecated/Icon';
import styles from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-icon-rd-20x20.svg';

interface AppLogoProps {
    className?: string;
}

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <HStack max justify="center" className={classNames(styles.appLogoWrapper, {}, [className])}>
            <Icon Svg={AppSvg} className={styles.appLogo} width="58" height="58" />
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
        </HStack>
    );
});
