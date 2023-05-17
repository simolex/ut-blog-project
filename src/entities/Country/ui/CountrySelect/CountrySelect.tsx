import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { SelectOption } from '@/shared/ui/deprecated/Select';
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
        <ListBox
            onChange={onChangeHandler}
            label={t('profile-country')}
            defaultValue={t('profile-country')}
            items={options}
            readonly={readonly}
            value={value}
            direction="top right"
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('profile-country')}
    //         options={options}
    //         valueSelected={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
