import { memo, ReactNode, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useDrag } from '@use-gesture/react';
import { a, useSpring, config } from '@react-spring/web';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from 'shared/lib/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const Drawer = memo((props: DrawerProps) => {
    // const {} = useAnimationLibs();
    const [{ y }, api] = useSpring(() => ({ y: height }));
    const { className, children, isOpen, onClose, lazy = false } = props;
    const { theme } = useTheme();
    const { t } = useTranslation();

    // const {
    //     isClosing,
    //     isMounted,
    //     close: closeHandler,
    // } = useModal({
    //     animationDelay: 300,
    //     isOpen,
    //     onClose,
    // });

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = useDrag(
        ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
            if (my < -70) {
                cancel();
            }

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    // const mods: Mods = {
    //     [styles.opened]: isOpen,
    //     [styles.isClosing]: isClosing,
    // };

    // if (lazy && !isMounted) {
    //     return null;
    // }

    return (
        <Portal>
            <div className={classNames(styles.drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <a.div
                    className={styles.sheet}
                    style={{ display, bottom: `calc(-100% + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </a.div>
            </div>
        </Portal>
    );
});
