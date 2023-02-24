import createSliceCustom from "../utils";

const initialState = {
    value: {
        imageUrl: '',
        isVisible: false
    }
}

export const imagePopupSlice = createSliceCustom({
    name: 'imagePopup',
    initialState,
    reducers: {
        showPopup: (state, action) => {
            state.value = {
                imageUrl: action.payload,
                isVisible: true
            }
        },
        hidePopup: (state) => {
            state.value = {
                imageUrl: '',
                isVisible: false
            }
        }
    }
});

export const {showPopup, hidePopup} = imagePopupSlice.actions;
export default imagePopupSlice.reducer;