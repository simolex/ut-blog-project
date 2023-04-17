import { DropdownDirection } from 'shared/types/ui';
import styles from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.popupOptionsBottomLeft,
    'bottom right': styles.popupOptionsBottomRight,
    'top left': styles.popupOptionsTopLeft,
    'top right': styles.popupOptionsTopRight,
};
