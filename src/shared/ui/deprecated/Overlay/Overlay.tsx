import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return <div onClick={onClick} className={classNames(styles.overlay, {}, [className])} />;
});
