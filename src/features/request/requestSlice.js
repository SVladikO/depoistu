import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {
        isLoading: false
    }
}

export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        startLoading: (state, action) => {
            state.value.isLoading = true;
        },
        stopLoading: (state, action) => {
            state.value.isLoading = false;
        },
    }
});

export const {startLoading, stopLoading} = requestSlice.actions;
export default requestSlice.reducer;