import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {
        imageUrl: '',
        isVisible: false
    }
}

export const imagePopupSlice = createSlice({
    name: 'imagePopup',
    initialState,
    reducers: {
        showPopup: (state, action) => {
            console.log('showPopup', action.payload)
            state.value = {
                imageUrl: action.payload,
                isVisible: true
            }
        },
        hidePopup: (state) => {
            console.log('hidePopup')
            state.value = {
                imageUrl: '',
                isVisible: false
            }
        }
    }
});

export const {showPopup, hidePopup} = imagePopupSlice.actions;
export default imagePopupSlice.reducer;