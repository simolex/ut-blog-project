import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';

import { classNames, Mods } from 'shared/lib/classNames';
import { mapDirectionClass } from '../../styles/const';
import styles from './Popover.module.scss';
import popupStyles from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;
    const { t } = useTranslation();
    const mods: Mods = {};

    const directionClass = mapDirectionClass[direction];

    return (
        <HPopover className={classNames('', {}, [className, popupStyles.popup])}>
            <HPopover.Button className={popupStyles.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(styles.panel, {}, [directionClass])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
