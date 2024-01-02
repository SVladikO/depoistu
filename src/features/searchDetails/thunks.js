import {createAsyncThunk} from "@reduxjs/toolkit";
import {BE_API, fetchData} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

export const fetchMenu = createAsyncThunk(
    'searchDetails/fetchMenu',
    async (companyId) => {
        const storageMenuItems = LocalStorage.get(LOCAL_STORAGE_KEY.SEARCH_DETAILS_MENU)

        if (storageMenuItems?.length) {
            return storageMenuItems
        }

        const response = await fetchData(BE_API.MENU_ITEM.GET_ONLY_VISIBLE_BY_COMPANY_ID(companyId))

        const responseWithPrice = response.body.map(item => ({...item, amount_1: 0, amount_2: 0, amount_3: 0}))
        LocalStorage.set(LOCAL_STORAGE_KEY.SEARCH_DETAILS_MENU, responseWithPrice)
        return responseWithPrice
    }
)