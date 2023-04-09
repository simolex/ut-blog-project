import { ElementType } from 'react';
import { PolymorphicComponentProp } from 'shared/types';
import { defaultFlexTag, Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = <E extends ElementType = typeof defaultFlexTag>(
    props: PolymorphicComponentProp<E, VStackProps>,
) => {
    const { as, align = 'start', ...otherProps } = props;
    const tag = as ?? defaultFlexTag;
    return <Flex direction="column" align={align} {...otherProps} />;
};
