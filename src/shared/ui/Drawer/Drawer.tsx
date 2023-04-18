import { useTheme } from 'app/providers/ThemeProvider';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();

    const { t } = useTranslation();
    const mods: Mods = {
        [styles.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(styles.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
});
