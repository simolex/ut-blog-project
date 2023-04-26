import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/const';
import styles from './Dropdown.module.scss';
import popupStyles from '../../styles/popup.module.scss';

export interface DropdownItem {
    id: string;
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;
    const directionClass = mapDirectionClass[direction];

    return (
        <Menu className={classNames('', {}, [className, popupStyles.popup])} as="div">
            <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(styles.list, {}, [directionClass])}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <Button
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(styles.item, {
                                [popupStyles.active]: active,
                            })}
                        >
                            {item.content}
                        </Button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                key={item.id}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={item.id} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
