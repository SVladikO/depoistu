import createSliceCustom from "features/utils";
import {fetchMenu} from "./thunks";
import {errorHandler} from "../../utils/management";

const initialState = {
    companyId: null,
    menuItems: [],
    isMenuLoading: false,
    menuError: undefined,
    allMenuItemsAmount: 0
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
                state.allMenuItemsAmount += 1
            }
        },
        decrementMenuItemAmount: (state, action) => {
            const {id, amountKey} = action.payload;
            const itemToUpdate = state.menuItems.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate[amountKey] += -1
                state.allMenuItemsAmount += -1
            }
        }
    },
    extraReducers: {
        [fetchMenu.pending]: (state) => {
            state.isMenuLoading = true
        },
        [fetchMenu.fulfilled]: (state, action) => {
            state.isMenuLoading = false
            state.menuItems = action.payload
            state.allMenuItemsAmount = 0
        },
        [fetchMenu.rejected]: (state, error) => {
            errorHandler(error)
        },
    }
});

export const {
    setCompanyId,
    incrementMenuItemAmount,
    decrementMenuItemAmount
} = searchDetailsSlice.actions;
export default searchDetailsSlice.reducer;