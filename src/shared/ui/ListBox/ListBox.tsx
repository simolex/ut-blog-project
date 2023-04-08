import { Fragment, memo, ReactNode, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './ListBox.module.scss';
import { HStack } from '../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: styles.listOptionsBottom,
    top: styles.listOptionsTop,
};

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        label,
        direction = 'bottom',
    } = props;

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames(styles.listBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={styles.listButton} as="div">
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(styles.listOptions, {}, [mapDirectionClass[direction]])}
                >
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
                                        [styles.active]: active,
                                        [styles.disabled]: item.disabled,
                                        [styles.selected]: selected,
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
