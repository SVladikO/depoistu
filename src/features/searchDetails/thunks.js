import {createAsyncThunk} from "@reduxjs/toolkit";
import {BE_API, fetchData} from "utils/fetch";

export const fetchMenu = createAsyncThunk(
    'searchDetails/fetchMenu',
    async (companyId, {rejectWithValue}) => {
        try {
            const response = await fetchData(BE_API.MENU_ITEM.GET_ONLY_VISIBLE_BY_COMPANY_ID(companyId))
            return response.body.map(item => ({...item, amount_1: 0, amount_2: 0, amount_3: 0, isImageVisible: false}))
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const fetchCompany = createAsyncThunk(
    'searchDetails/fetchCompany',
    async (companyId, {rejectWithValue}) => {
        try {
            const responce = await fetchData(BE_API.COMPANY.GET_BY_COMPANY_ID(companyId))
            return responce.body[0]
        } catch (e) {
            return rejectWithValue(e);
        }

    }
)
