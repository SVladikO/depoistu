import createSliceCustom from "features/utils";
import {DEFAULT_LANGUAGE} from "utils/translation";

const initialState = {
    isLanguagePopupVisible: false,
    siteLanguage: DEFAULT_LANGUAGE,
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