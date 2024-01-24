import createSliceCustom from "features/utils";
import {fetchMenu, fetchCompany} from "./thunks";
import {errorHandlerRedux} from "utils/fetch";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

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
        resetSearchDetails: (state) => {
            state.company = null;
            state.menuItems = [];
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
            const company = action.payload;
            state.isCompanyLoading = false
            state.company = company;

            // For navigation from search to search-details page it was bad idea to limit amount of call to BE
            // All we lost our main principle "CUSTOMER ALWAYS SEE LAST VERSION OF COMPANY & MENU"
            // Also we may have situation when somebody doesn't update his search page.
            // He visits only one company each time.
            // That's why was made design to update search companies from search details company.
            const searchCompanies = LocalStorage.get(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT);
            const updatedCompanies = searchCompanies.map(sc => sc.id === company.id ? company : sc);
            LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, updatedCompanies)
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
    resetSearchDetails,
    incrementMenuItemAmount,
    decrementMenuItemAmount,
    makeMenuItemImageVisible,
    resetOrder,
} = searchDetailsSlice.actions;
export default searchDetailsSlice.reducer;