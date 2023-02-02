import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modalWindow: false
}
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModalWindow: (state) => {
            state.modalWindow = true;
        },
        closeModalWindow: (state) => {
            state.modalWindow = false;
        }
    }
});

export const {showModalWindow, closeModalWindow} = modalSlice.actions;
export default modalSlice.reducer;
