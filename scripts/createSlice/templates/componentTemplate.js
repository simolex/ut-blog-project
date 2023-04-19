const interfaceConst = 'interface';
const toCamelCase = require('@neumatter/to-camel-case');

module.exports = (componentName) => `
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames';
import styles from './${componentName}.module.scss';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    const mods: Mods = {};
    
    return (
        <div className={classNames(styles.${toCamelCase(componentName)}, {}, [className])}>
            ${componentName}
        </div>
    );
});
`;
