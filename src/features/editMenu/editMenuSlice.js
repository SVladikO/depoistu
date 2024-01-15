import createSliceCustom from "features/utils";
import {
    fetchGetMenuItemsByCompanyId,
    fetchPostMenuItem,
    fetchDeleteMenuItem,
    fetchPutMenuItem,
    fetchPutMenuItemIsVisible
} from "./thunks";

import {publishNotificationEvent} from "utils/event";

import {errorHandlerRedux} from "utils/management";
import {translate, TRANSLATION} from "utils/translation";

const initialState = {
    company_id: undefined,
    editMenuItems: [],
    editMenuItemCandidate: undefined,
    isLoadingGetEditMenuItems: false,
    isLoadingAddMenuItem: false,
    isLoadingUpdateEditMenuItem: false,
    isLoadingUpdateVisiblityMenuItem: false,
    isLoadingDeleteMenuItem: false,
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
            state.isLoadingGetEditMenuItems = false;
            state.isLoadingAddMenuItem = false;
            state.isLoadingUpdateEditMenuItem = false;
            state.isLoadingUpdateVisiblityMenuItem = false;
            state.isLoadingDeleteMenuItem = false;
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
            state.isLoadingGetEditMenuItems = true
        },
        [fetchGetMenuItemsByCompanyId.fulfilled]: (state, action) => {
            state.isLoadingGetEditMenuItems = false
            state.editMenuItems = action.payload;
        },
        [fetchGetMenuItemsByCompanyId.rejected]: (state, error) => {
            state.isLoadingGetEditMenuItems = false
            errorHandlerRedux(error.payload)
        },
        //
        [fetchPostMenuItem.pending]: (state) => {
            state.isLoadingAddMenuItem = true
        },
        [fetchPostMenuItem.fulfilled]: (state, action) => {
            state.isLoadingAddMenuItem = false
            console.log('fetchPostMenuItem(', action.payload)
            debugger
            state.editMenuItems.push(action.payload)
            publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_CREATED))
        },
        [fetchPostMenuItem.rejected]: (state, error) => {
            state.isLoadingAddMenuItem = false
            debugger
            errorHandlerRedux(error.payload)
        },
        //
        [fetchPutMenuItem.pending]: (state) => {
            state.isLoadingUpdateEditMenuItem = true
        },
        [fetchPutMenuItem.fulfilled]: (state, action) => {
            state.isLoadingUpdateEditMenuItem = false
            state.editMenuItems = state.editMenuItems.map(item => item.id === action.payload.id ? action.payload : item)
            publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_UPDATED))
        },
        [fetchPutMenuItem.rejected]: (state, error) => {
            state.isLoadingUpdateEditMenuItem = false
            errorHandlerRedux(error.payload)
        },
        //
        [fetchDeleteMenuItem.pending]: (state) => {
            state.isCompanyLoading = true
        },
        [fetchDeleteMenuItem.fulfilled]: (state, action) => {
            state.isCompanyLoading = false
            const filtered = state.editMenuItems.filter(i => i.id !== action.payload);
            console.log('length:', action, state.editMenuItems.length, filtered.length)
            state.editMenuItems = filtered;
        },
        [fetchDeleteMenuItem.rejected]: (state, error) => {
            state.isCompanyLoading = false
            errorHandlerRedux(error.payload)
        },
        //
        [fetchPutMenuItemIsVisible.pending]: (state) => {
            state.isLoadingUpdateVisiblityMenuItem = true
        },
        [fetchPutMenuItemIsVisible.fulfilled]: (state, action) => {
            state.isLoadingUpdateVisiblityMenuItem = false
            const filtered = state.editMenuItems.filter(i => i.id !== action.payload);
            console.log('length:', action, state.editMenuItems.length, filtered.length)
            state.editMenuItems = filtered;
        },
        [fetchPutMenuItemIsVisible.rejected]: (state, error) => {
            state.isLoadingUpdateVisiblityMenuItem = false
            errorHandlerRedux(error.payload)
        },
    }
});

export const {
    initEditMenuItems,
    resetAllEditMenu,
    setCompanyIdToEditMenu,
    addEditMenuItemCandidate,
    changeIsImageVisibleEditMenu,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
} = editMenuSlice.actions;
export default editMenuSlice.reducer;