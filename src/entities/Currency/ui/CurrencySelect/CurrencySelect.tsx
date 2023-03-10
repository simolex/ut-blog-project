import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options: SelectOption[] = [];
Object.entries(Currency).forEach(([key, enumValue]) => {
    options.push({ value: key, content: enumValue });
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
        <Select
            className={classNames('', {}, [className])}
            label={t('profile-currency')}
            options={options}
            valueSelected={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
