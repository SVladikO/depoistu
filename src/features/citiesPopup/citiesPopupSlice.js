import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {
        cities: '',
        isVisible: false
    }
}

export const citiesPopupSlice = createSlice({
    name: 'imagePopup',
    initialState,
    reducers: {
        showPopup: (state, action) => {
            state.value =  {
                cities: action.payload,
                isVisible: true
            }
        },
        hidePopup: (state) => {
            state.value = {
                cities: '',
                isVisible: false
            }
        }
    }
});

export const {showPopup, hidePopup} = citiesPopupSlice.actions;
export default citiesPopupSlice.reducer;