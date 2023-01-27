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
        addErrorMessage: (state, action) => {
            state.value.message = action.payload;
        },
        deleteErrorMessage: (state) => {
            state.value.message = "";
        }
    }
});

export const {addErrorMessage, deleteErrorMessage} = errorSlice.actions;
export default errorSlice.reducer;