import { ElementType } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import { PolymorphicComponentProp } from '@/shared/types';
import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    end: styles.justifyEnd,
    center: styles.justifyCenter,
    between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    end: styles.alignEnd,
    center: styles.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: styles['gap-4'],
    8: styles['gap-8'],
    16: styles['gap-16'],
    32: styles['gap-32'],
};

export interface FlexProps {
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const defaultFlexTag = 'div';

export const Flex = <E extends ElementType = typeof defaultFlexTag>(
    props: PolymorphicComponentProp<E, FlexProps>,
) => {
    const {
        className,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        children,
        as,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [styles.max]: max,
    };

    const Tag = as ?? defaultFlexTag;

    return <Tag className={classNames(styles.flex, mods, classes)}>{children}</Tag>;
};
