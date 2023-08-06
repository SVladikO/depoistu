import createSliceCustom from "../utils";

const initialState = {
    isIntroPopupVisible: true
}

export const introSlice = createSliceCustom({
    name: 'intro',
    initialState,
    reducers: {
        closeIntroPopup: (state) => {
            state.isIntroPopupVisible = false
        },
    }
});
export const {closeIntroPopup} = introSlice.actions;
export default introSlice.reducer;