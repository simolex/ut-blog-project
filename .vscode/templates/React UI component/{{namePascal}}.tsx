import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './{{namePascal}}.module.scss';

interface {{namePascal}}Props {
    className?: string;
}

export const {{namePascal}} = memo((props: {{namePascal}}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    const mods: Mods = {};

    return <div className={classNames(styles.{{nameCamel}}, {}, [className])}>{{namePascal}}</div>;
});
