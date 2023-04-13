import { memo } from 'react';

export type {
    PolymorphicComponentProp,
    PolymorphicComponentPropWithRef,
    PolymorphicRef,
} from './polymophic';

export type SortOrder = 'asc' | 'desc';

export const typedMemo: <T>(c: T) => T = memo;
