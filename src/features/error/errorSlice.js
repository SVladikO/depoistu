import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        addErrorMessage: (state, action) => {
            state.value = action.payload;
        },
        deleteErrorMessage: (state) => {
            state.value = "";
        }
    }
});

export const {addErrorMessage, deleteErrorMessage} = errorSlice.actions;
export default errorSlice.reducer;