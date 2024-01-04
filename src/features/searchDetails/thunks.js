import {createAsyncThunk} from "@reduxjs/toolkit";
import {BE_API, fetchData} from "../../utils/fetch";

export const fetchMenu = createAsyncThunk(
    'searchDetails/fetchMenu',
    async (companyId, {getState}) => {
        const { menuItems } = getState().searchDetails
        console.log(11, menuItems)

        const response = await fetchData(BE_API.MENU_ITEM.GET_ONLY_VISIBLE_BY_COMPANY_ID(companyId))
        const responseWithPrice = response.body.map(item => ({...item, amount_1: 0, amount_2: 0, amount_3: 0}))

        return responseWithPrice
    }
)