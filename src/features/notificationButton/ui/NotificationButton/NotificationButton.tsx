import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/@/shared/ui';
import { Icon } from '@/@/shared/ui';
import { Popover } from '@/@/shared/ui';
import { Drawer } from '@/@/shared/ui';
import NotificationIcon from '@/shared/assets/icons/notification-20x20.svg';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted width={20} height={20} />
        </Button>
    );

    /**
     * TODO replace  'react-device-detect'

     ***** Variant 1

     * function detectDevice() {
     * const isMobile = window.matchMedia
     * if (!isMobile) return false
     * const device = isMobile("(pointer:coarse)")
     * return device.matches
     * }

     ***** Variant 2

     * export const useDevice = () => {
     * const [isMobile, setIsMobile] = useState(false);

     * useEffect(() => {
     * const handleResize = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);

     * handleResize();
     * window.addEventListener('resize', handleResize);

     * return () => window.removeEventListener('resize', handleResize); // удаляем обработчик
     * }, []);

     * return isMobile;
     * };

     */

    return (
        <>
            <BrowserView renderWithFragment>
                <Popover
                    className={classNames(styles.notificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={styles.notifications} />
                </Popover>
            </BrowserView>
            <MobileView renderWithFragment>
                {trigger}
                <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
});
