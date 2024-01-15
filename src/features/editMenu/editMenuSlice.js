import createSliceCustom from "features/utils";
import {fetchGetMenuItemsByCompanyId, fetchPostMenuItem, fetchDeleteMenuItem, fetchPutMenuItem} from "./thunks";
import {errorHandler} from "utils/management";

const initialState = {
    company_id: undefined,
    editMenuItems: [],
    editMenuItemCandidate: undefined,
    isGetMenuItemsLoading: false,
    isAddMenuItemLoading: false,
    isUpdateMenuItemLoading: false,
    isDeleteMenuItemLoading: false,
}

export const editMenuSlice = createSliceCustom({
    name: 'editMenu',
    initialState,
    reducers: {
        initEditMenuItems: (state, action) => {
            console.log('initEditMenuItems( ', action)
            state.editMenuItems = action.payload.map(i => ({...i, isImageVisible: false}))
        },
        resetAllEditMenu: (state) => {
            console.log('resetAllEditMenu( ')
            state.company_id = undefined;
            state.editMenuItems = [];
            state.editMenuItemCandidate = undefined;
            state.isGetMenuItemsLoading = false;
            state.isAddMenuItemLoading = false;
            state.isUpdateMenuItemLoading = false;
            state.isDeleteMenuItemLoading = false;
        },
        setCompanyIdToEditMenu: (state, action) => {
            console.log('setCompanyIdToEditMenu( ')
            state.company_id = action.payload
        },
        addEditMenuItemCandidate: (state, action) => {
            console.log('addEditMenuItemCandidate(', action.payload.id, action.payload.name);
            state.editMenuItemCandidate = action.payload
        },
        changeIsVisibleEditMenu: (state, action) => {
            const filtered = state.editMenuItems.find(i => i.id === action.payload);
            filtered.isVisible = +(!filtered.isVisible);
        },
        changeIsImageVisibleEditMenu: (state, action) => {
            const filtered = state.editMenuItems.find(i => i.id === action.payload.id);
            filtered.isImageVisible = !filtered.isImageVisible;
        },
        addMenuItem: (state, action) => {
            console.log('addMenuItem( ', action)
            state.editMenuItems.push(action.payload)
        },
        updateMenuItem: (state, action) => {
            state.editMenuItems = state.editMenuItems.map(item => item.id === action.payload.id ? action.payload : item);
        },
        deleteMenuItem: (state, action) => {
            const filtered = state.editMenuItems.filter(i => i.id !== action.payload.id);
            state.editMenuItems = filtered;
        },
    },
    extraReducers: {
        [fetchGetMenuItemsByCompanyId.pending]: (state) => {
            state.isGetMenuItemsLoading = true
        },
        [fetchGetMenuItemsByCompanyId.fulfilled]: (state, action) => {
            state.isGetMenuItemsLoading = false
            state.editMenuItems = action.payload;
        },
        [fetchGetMenuItemsByCompanyId.rejected]: (state, error) => {
            state.isGetMenuItemsLoading = false
            errorHandler(error.payload)
        },

        [fetchPostMenuItem.pending]: (state) => {
            state.isAddMenuItemLoading = true
        },
        [fetchPostMenuItem.fulfilled]: (state, action) => {
            state.isAddMenuItemLoading = false
            console.log('fetchPostMenuItem(', action.payload)
            state.editMenuItems.push(action.payload)
        },
        [fetchPostMenuItem.rejected]: (state, error) => {
            state.isAddMenuItemLoading = false
            errorHandler(error.payload)
        },

        [fetchPutMenuItem.pending]: (state) => {
            state.isUpdateMenuItemLoading = true
        },
        [fetchPutMenuItem.fulfilled]: (state, action) => {
            state.isUpdateMenuItemLoading = false
            state.editMenuItems = state.editMenuItems.map(item => item.id === action.payload.id ? action.payload : item)
        },
        [fetchPutMenuItem.rejected]: (state, error) => {
            state.isUpdateMenuItemLoading = false
            errorHandler(error.payload)
        },

        [fetchDeleteMenuItem.pending]: (state) => {
            state.isCompanyLoading = true
        },
        [fetchDeleteMenuItem.fulfilled]: (state, action) => {
            state.isCompanyLoading = false
            const filtered = state.editMenuItems.filter(i => i.id !== action.payload);
            console.log('length:', action, state.editMenuItems.length, filtered.length)
            state.editMenuItems = filtered;
        },
        [fetchDeleteMenuItem.rejected]: (state) => {
            state.isCompanyLoading = false
        },
    }
});

export const {
    initEditMenuItems,
    resetAllEditMenu,
    setCompanyIdToEditMenu,
    addEditMenuItemCandidate,
    changeIsVisibleEditMenu,
    changeIsImageVisibleEditMenu,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
} = editMenuSlice.actions;
export default editMenuSlice.reducer;