import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import CopyIcon from '@/shared/assets/icons/clipboard-20x20.svg';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const { t } = useTranslation('article');

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.code, {}, [className])}>
            <Button onClick={onCopy} className={styles.copyBtn} theme={ButtonTheme.CLEAR}>
                <Icon
                    className={styles.copyIcon}
                    Svg={CopyIcon}
                    title={t('article-code-copy-title')}
                />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
