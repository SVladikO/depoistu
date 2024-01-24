import createSliceCustom from "features/utils";
import {fetchMenu, fetchCompany} from "./thunks";
import {errorHandlerRedux} from "utils/fetch";

const initialState = {
    companyId: null,
    company: null,
    menuItems: [],
    isMenuLoading: false,
    isCompanyLoading: false,
    menuError: undefined,
    companyError: undefined,
}

export const searchDetailsSlice = createSliceCustom({
    name: 'searchDetails',
    initialState,
    reducers: {
        setCompanyId: (state, action) => {
            state.companyId = action.payload;
        },
        incrementMenuItemAmount: (state, action) => {
            const {id, amountKey} = action.payload;
            const itemToUpdate = state.menuItems.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate[amountKey] += 1
            }
        },
        decrementMenuItemAmount: (state, action) => {
            const {id, amountKey} = action.payload;
            const itemToUpdate = state.menuItems.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate[amountKey] += -1
            }
        },
        makeMenuItemImageVisible: (state, action) => {
            const {id} = action.payload;
            const itemToUpdate = state.menuItems.find(item => item.id === id);

            if (itemToUpdate) {
                itemToUpdate.isImageVisible = true;
            }
        },
        resetOrder: (state) => {
            state.menuItems = state.menuItems.map(menuItem => ({...menuItem, amount_1: 0, amount_2: 0, amount_3: 0}))
        }
    },
    extraReducers: {
        [fetchMenu.pending]: (state) => {
            state.isMenuLoading = true
        },
        [fetchMenu.fulfilled]: (state, action) => {
            state.isMenuLoading = false
            state.menuItems = action.payload
        },
        [fetchMenu.rejected]: (state, error) => {
            state.isMenuLoading = false
            state.menuItems = []
            errorHandlerRedux(error.payload)
        },
        [fetchCompany.pending]: (state) => {
            state.isCompanyLoading = true
        },
        [fetchCompany.fulfilled]: (state, action) => {
            state.isCompanyLoading = false
            state.company = action.payload
        },
        [fetchCompany.rejected]: (state, error) => {
            state.isCompanyLoading = false
            state.company = null
            errorHandlerRedux(error.payload)
        },
    }
});

export const {
    setCompanyId,
    incrementMenuItemAmount,
    decrementMenuItemAmount,
    makeMenuItemImageVisible,
    resetOrder,
} = searchDetailsSlice.actions;
export default searchDetailsSlice.reducer;