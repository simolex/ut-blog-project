import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollFixerAll = (state: StateSchema) => state.scrollFixer.scroll;
export const getScrollFixerByPath = createSelector(
    getScrollFixerAll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
