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
            state.editMenuItems = action.payload.map(i => ({...i, isImageVisible: false}))
        },
        resetAllEditMenu: (state) => {
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
            state.company_id = action.payload
        },
        addEditMenuItemCandidate: (state, action) => {
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
            state.editMenuItems.push(action.payload)
            publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_CREATED))
        },
        [fetchPostMenuItem.rejected]: (state, error) => {
            state.isLoadingAddMenuItem = false
            errorHandlerRedux(error.payload)
        },
        // fetchPutMenuItem
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
        // fetchDeleteMenuItem
        [fetchDeleteMenuItem.pending]: (state) => {
            state.isCompanyLoading = true
        },
        [fetchDeleteMenuItem.fulfilled]: (state, action) => {
            state.isCompanyLoading = false
            const filtered = state.editMenuItems.filter(i => i.id !== action.payload);
            state.editMenuItems = filtered;
            publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_DELETED))
        },
        [fetchDeleteMenuItem.rejected]: (state, error) => {
            state.isCompanyLoading = false
            errorHandlerRedux(error.payload)
        },
        // fetchPutMenuItemIsVisible
        [fetchPutMenuItemIsVisible.pending]: (state) => {
            state.isLoadingUpdateVisiblityMenuItem = true
        },
        [fetchPutMenuItemIsVisible.fulfilled]: (state, action) => {
            state.isLoadingUpdateVisiblityMenuItem = false;
            state.editMenuItems = state.editMenuItems.map(
                item => {

                    return item.id === action.payload.id
                        ? {...item, isVisible: action.payload.isVisible}
                        : item
                }
            )

        },
        [fetchPutMenuItemIsVisible.rejected]:
            (state, error) => {
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