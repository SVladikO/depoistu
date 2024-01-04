import createSliceCustom from "features/utils";
import {fetchMenu} from "./thunks";
import {errorHandler} from "utils/management";

const initialState = {
    companyId: null,
    menuItems: [],
    defMenuItems: [],
    isMenuLoading: false,
    menuError: undefined,
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
        resetOrder: (state) => {
            state.menuItems = state.defMenuItems
        }
    },
    extraReducers: {
        [fetchMenu.pending]: (state) => {
            state.isMenuLoading = true
        },
        [fetchMenu.fulfilled]: (state, action) => {
            state.isMenuLoading = false
            state.menuItems = action.payload
            state.defMenuItems = action.payload
        },
        [fetchMenu.rejected]: (state, error) => {
            errorHandler(error)
        },
    }
});

export const {
    setCompanyId,
    incrementMenuItemAmount,
    decrementMenuItemAmount,
    resetOrder,
} = searchDetailsSlice.actions;
export default searchDetailsSlice.reducer;