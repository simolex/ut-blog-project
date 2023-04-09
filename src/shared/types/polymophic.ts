/**
 * Title: Build strongly typed polymorphic components with React and TypeScript
 * Author: Ohans Emmanuel
 * Link: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript
 */

import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

// Common types
export type AsProp<E extends ElementType> = {
    as?: E;
};

export type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P);

// Type for Component props without Ref
export type PolymorphicComponentProp<E extends ElementType, Props = {}> = PropsWithChildren<
    Props & AsProp<E>
> &
    Omit<ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;

// Type for Component props with available Ref
export type PolymorphicRef<E extends ElementType> = ComponentPropsWithoutRef<E>['ref'];

export type PolymorphicComponentPropWithRef<
    E extends ElementType,
    Props = {},
> = PolymorphicComponentProp<E, Props> & { ref?: PolymorphicRef<E> };
