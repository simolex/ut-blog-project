import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextVariant {
    NORMAL = 'normal',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
};

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = TextVariant.NORMAL,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div
            className={classNames(styles.text, {}, [
                className,
                styles[variant],
                styles[align],
                styles[size],
            ])}
        >
            {title && (
                <HeaderTag className={styles.title} data-testid={`${dataTestId}.Title`}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={styles.textContent} data-testid={`${dataTestId}.Text`}>
                    {text}
                </p>
            )}
        </div>
    );
});
