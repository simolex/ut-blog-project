import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options: SelectOption<Country>[] = [];
Object.entries(Country).forEach(([key, enumValue]) => {
    options.push({ value: enumValue, content: enumValue });
});

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('profile-country')}
            options={options}
            valueSelected={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
