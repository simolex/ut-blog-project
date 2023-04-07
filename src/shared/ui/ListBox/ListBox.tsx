import { Fragment, memo, ReactNode, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './ListBox.module.scss';

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
}

export const ListBox = memo((props: ListBoxProps) => {
    const { className, items, value, onChange, defaultValue } = props;
    const { t } = useTranslation();
    const mods: Mods = {};

    const [selectedPerson, setSelectedPerson] = useState(defaultValue);

    return (
        <HListbox
            as="div"
            className={classNames(styles.listBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <HListbox.Button className={styles.listButton} as="div">
                <Button>{value ?? defaultValue}</Button>
            </HListbox.Button>
            <HListbox.Options className={styles.listOptions}>
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
                                })}
                            >
                                {selected && '# '}
                                {item.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
});
