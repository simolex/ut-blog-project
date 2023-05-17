import { ElementType } from 'react';
import { PolymorphicComponentProp } from '@/shared/types';
import { defaultFlexTag, Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = <E extends ElementType = typeof defaultFlexTag>(
    props: PolymorphicComponentProp<E, VStackProps>,
) => {
    const { as, align = 'start', 'data-testid': dataTestId = 'VStack', ...otherProps } = props;
    const tag = as ?? defaultFlexTag;
    return <Flex direction="column" align={align} data-testid={dataTestId} {...otherProps} />;
};
