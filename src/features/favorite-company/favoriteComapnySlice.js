import createSliceCustom from "features/utils";

const initialState = {
    value: null
}

const favoriteCompanySlice = createSliceCustom({
    name: 'favoriteCompany',
    initialState,
    reducers: {
        initFavoriteCompanies: (state, action) => {
            console.log(22222, action.payload)
            state.value = action.payload;
        },
    }
});

export const {initFavoriteCompanies} = favoriteCompanySlice.actions;
export default favoriteCompanySlice.reducer;