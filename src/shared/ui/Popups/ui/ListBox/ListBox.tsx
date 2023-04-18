import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '@/shared/ui/Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/const';
import styles from './ListBox.module.scss';
import popupStyles from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        label,
        direction = 'bottom right',
    } = props;

    const directionClass = mapDirectionClass[direction];

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames(styles.listBox, {}, [className, popupStyles.popup])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={styles.listButton} as="div">
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(styles.listOptions, {}, [directionClass])}>
                    {items?.map((item) => (
                        <HListbox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(styles.listItem, {
                                        [popupStyles.active]: active,
                                        [popupStyles.disabled]: item.disabled,
                                        [popupStyles.selected]: selected,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
});
