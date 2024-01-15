import {createAsyncThunk} from "@reduxjs/toolkit";
import {BE_API, fetchData, fetchDataRedux} from "utils/fetch";

export const fetchGetMenuItemsByCompanyId = createAsyncThunk(
    'editMenu/fetchGetMenuItemsByCompanyId',
    async (companyId, {rejectWithValue}) => {
        try {
            const response = await fetchDataRedux(BE_API.MENU_ITEM.GET_BY_COMPANY_ID(companyId))
            const body = await response.json()
            return body
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const fetchPostMenuItem = createAsyncThunk(
    'editMenu/fetchPostMenuItem',
    async (menuItem, {rejectWithValue}) => {
        try {
            const response = await fetchDataRedux(BE_API.MENU_ITEM.POST_CREATE(), menuItem)
            const body = await response.json()
            debugger
            return body
        } catch (e) {
            return rejectWithValue(e);
        }

    }
);

export const fetchPutMenuItem = createAsyncThunk(
    'editMenu/fetchPutMenuItem',
    async (menuItem, {rejectWithValue}) => {
        try {
            await fetchDataRedux(BE_API.MENU_ITEM.PUT_UPDATE(), menuItem)
            return menuItem
        } catch (e) {
            return rejectWithValue(e);
        }

    }
);

export const fetchDeleteMenuItem = createAsyncThunk(
    'editMenu/fetchDeleteMenuItem',
    async (menuItemId, {rejectWithValue}) => {
        try {
            await fetchDataRedux(BE_API.MENU_ITEM.DELETE(), {method: 'delete', id: menuItemId})
            return menuItemId;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const fetchPutMenuItemIsVisible = createAsyncThunk(
    'editMenu/fetchPutMenuItemIsVisible',
    async (requestBody, {rejectWithValue}) => {
        try {
            await fetchDataRedux(BE_API.MENU_ITEM.CHANGE_IS_VISIBLE(), requestBody)
            return requestBody;
        } catch (e) {
            return rejectWithValue(e);
        }

    }
)
