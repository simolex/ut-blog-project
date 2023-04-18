import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    valueSelected?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, valueSelected, onChange, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionList = useMemo(
        () =>
            options?.map(({ value, content }) => (
                <option className={styles.option} value={value} key={value}>
                    {content}
                </option>
            )) || [],
        [options],
    );

    return (
        <div className={classNames(styles.selectWrapper, {}, [className])}>
            {label && <span className={styles.label}>{`${label}>`}</span>}
            <select
                className={styles.select}
                value={valueSelected}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};
