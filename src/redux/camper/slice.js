import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const adsSlice = createSlice ({
    name: 'ads',
    initialState: {
        campers: [],
        loading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
        .addCase(getCampers.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCampers.fulfilled, (state, action) => {
            state.loading = false;
            state.campers = action.payload;
        })
        .addCase(getCampers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const adsReducer = adsSlice.reducer;