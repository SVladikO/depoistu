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
        showImagePopup: (state, action) => {
            state.value = {
                imageUrl: action.payload,
                isVisible: true
            }
        },
        hideImagePopup: (state) => {
            state.value = {
                imageUrl: '',
                isVisible: false
            }
        }
    }
});

export const {showImagePopup, hideImagePopup} = imagePopupSlice.actions;
export default imagePopupSlice.reducer;