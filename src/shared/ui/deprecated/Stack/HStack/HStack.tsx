import { ElementType } from 'react';
import { PolymorphicComponentProp } from '@/shared/types';
import { defaultFlexTag, Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const HStack = <E extends ElementType = typeof defaultFlexTag>(
    props: PolymorphicComponentProp<E, HStackProps>,
) => {
    const { as, ...otherProps } = props;
    const tag = as ?? defaultFlexTag;
    return <Flex direction="row" {...otherProps} />;
};
