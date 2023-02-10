import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: "",
    whereErrorHappenedUrl: ""
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        addErrorMessage: (state, action) => {
            state.value = action.payload;
            state.whereErrorHappenedUrl = window.location.href;
        },
        deleteErrorMessage: (state) => {
            state.value = "";
            state.whereErrorHappenedUrl = ""
        }
    }
});

export const {addErrorMessage, deleteErrorMessage} = errorSlice.actions;
export default errorSlice.reducer;