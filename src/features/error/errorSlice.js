import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {
        message: ""
    }
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        showErrorMessage: (state, action) => {
            state.value.message = action.payload;
        },
        closeErrorMessage: (state) => {
            state.value.message = "";
        }
    }
});

export const {showErrorMessage, closeErrorMessage} = errorSlice.actions;
export default errorSlice.reducer;