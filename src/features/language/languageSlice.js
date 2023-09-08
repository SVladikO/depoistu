import createSliceCustom from "features/utils";

const initialState = {
    isLanguagePopupVisible: true,
    siteLanguage: 'ua',
}

export const languageSlice = createSliceCustom({
    name: 'language',
    initialState,
    reducers: {
        closeLanguagePopup: (state) => {
            state.isLanguagePopupVisible = false
        },
        openLanguagePopup: (state) => {
            state.isLanguagePopupVisible = true;
        },
        setWebsiteLanguage: (state, action) => {
            state.siteLanguage = action.payload;
        }
    }
});

export const {
    closeLanguagePopup,
    openLanguagePopup,
    setWebsiteLanguage
} = languageSlice.actions;
export default languageSlice.reducer;