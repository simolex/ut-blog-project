import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options: SelectOption<Currency>[] = [];
Object.entries(Currency).forEach(([key, enumValue]) => {
    options.push({ value: enumValue, content: enumValue });
});

// const options = [
//     { value: Currency.RUB, content: Currency.RUB },
//     { value: Currency.EUR, content: Currency.EUR },
//     { value: Currency.USD, content: Currency.USD },
// ];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            defaultValue={t('profile-currency')}
            label={t('profile-currency')}
            items={options}
            value={value}
            readonly={readonly}
            direction="top right"
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('profile-currency')}
    //         options={options}
    //         valueSelected={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
