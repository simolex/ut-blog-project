import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';

import { classNames } from '@/shared/lib/classNames';
import { mapDirectionClass } from '../../styles/const';
import styles from './Popover.module.scss';
import popupStyles from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;

    const directionClass = mapDirectionClass[direction];

    return (
        <HPopover className={classNames('', {}, [className, popupStyles.popup])}>
            <HPopover.Button className={popupStyles.trigger} as="div">
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(styles.panel, {}, [directionClass])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
