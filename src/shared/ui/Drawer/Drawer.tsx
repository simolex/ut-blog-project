import { useTheme } from 'app/providers/ThemeProvider';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy = false } = props;
    const { theme } = useTheme();
    const { t } = useTranslation();

    const {
        isClosing,
        isMounted,
        close: closeHandler,
    } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    });

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={closeHandler} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
});
