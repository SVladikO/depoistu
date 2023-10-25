import createSliceCustom from "features/utils";

const initialState = {
    companyId: null,
}

export const {actions, reducer} = createSliceCustom({
    name: 'searchDetailsPage',
    initialState,
    reducers: {
        addCompanyIdForSearchDetailsPage: (state, action) => {
            state.companyId = action.payload;
        },
    }
});

export const {
    addCompanyIdForSearchDetailsPage,
} = actions;
export default reducer;