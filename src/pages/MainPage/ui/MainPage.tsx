/* eslint-disable i18next/no-literal-string */
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChanges = (val: string) => setValue(val);
    return (
        <div>
            {t('Главная')}
            <Input placeholder="Введите текст" value={value} onChange={onChanges} />
        </div>
    );
};

export default MainPage;
