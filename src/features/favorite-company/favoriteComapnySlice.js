import createSliceCustom from "features/utils";

const initialState = {
    value: null
}

const favoriteCompanySlice = createSliceCustom({
    name: 'favoriteCompany',
    initialState,
    reducers: {
        initFavoriteCompanies: (state, action) => {
            state.value = action.payload;
        },
        addToFavoriteCompanies: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        deleteFromFavoriteCompanies: (state, action) => {
            state.value = state.value.filter(fc => fc.id !== action.payload.id);
        },
        cleanFavoriteCompanies: state => {
            state.value = null
        }
    }
});

export const {
    initFavoriteCompanies,
    addToFavoriteCompanies,
    deleteFromFavoriteCompanies,
    cleanFavoriteCompanies
} = favoriteCompanySlice.actions;
export default favoriteCompanySlice.reducer;