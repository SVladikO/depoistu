import createSliceCustom from "../utils";

const initialState = {
    value: {
        text: '',
        isVisible: true
    }
}

export const introPopupSlice = createSliceCustom({
    name: 'introPopup',
    initialState,
    reducers: {
        showIntroPopup: (state, action) => {
            state.value = {
                text: action.payload,
                isVisible: true
            }
        },
        hideIntroPopup: (state) => {
            state.value = {
                text: '',
                isVisible: false
            }
        }
    }
});

export const {showIntroPopup, hideIntroPopup} = introPopupSlice.actions;
export default introPopupSlice.reducer;