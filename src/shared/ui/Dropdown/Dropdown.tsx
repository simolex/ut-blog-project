import { Fragment, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { DropdownDirection } from 'shared/types/ui';
import styles from './Dropdown.module.scss';

export interface DropdownItem {
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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.dropdownOptionsBottomLeft,
    'bottom right': styles.dropdownOptionsBottomRight,
    'top left': styles.dropdownOptionsTopLeft,
    'top right': styles.dropdownOptionsTopRight,
};

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;
    const { t } = useTranslation();
    const mods: Mods = {};

    return (
        <Menu className={classNames(styles.dropdown, {}, [className])} as="div">
            <Menu.Button className={styles.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(styles.list, {}, [mapDirectionClass[direction]])}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <Button
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(styles.item, {
                                [styles.active]: active,
                            })}
                        >
                            {item.content}
                        </Button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
