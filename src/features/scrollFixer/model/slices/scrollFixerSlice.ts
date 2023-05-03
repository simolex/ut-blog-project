import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { ScrollFixerSchema } from '../types/scrollFixerSchema';

const initialState: ScrollFixerSchema = {
    scroll: {},
};

export const scrollFixerSlice = buildSlice({
    name: 'scrollFixer',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const {
    actions: scrollFixerActions,
    reducer: scrollFixerReducer,
    useActions: useScrollFixerActions,
} = scrollFixerSlice;
