import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollFixerSchema } from '../types/scrollFixerSchema';

const initialState: ScrollFixerSchema = {
    scroll: {},
};

export const scrollFixerSlice = createSlice({
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
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: scrollFixerActions } = scrollFixerSlice;
export const { reducer: scrollFixerReducer } = scrollFixerSlice;
