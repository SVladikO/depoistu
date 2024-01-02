import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './order/orderSlice'
import errorReducer from "./error/errorSlice";
import requestReducer from "./request/requestSlice";
import customerReducer from "./customer/customerSlice";
import languageReducer from "./language/languageSlice";
import imagePopupReducer from "./imagePopup/imagePopupSlice";
import favoriteCompanyReducer from "./favorite-company/favoriteComapnySlice";
import searchDetailsPageReducer from "./searchDetails/searchDetailsSlice";

import {LOCAL_STORAGE_KEY, LocalStorage} from "../utils/localStorage";

export const createStore = () => configureStore({
    reducer: {
        order: orderReducer,
        error: errorReducer,
        request: requestReducer,
        customer: customerReducer,
        language: languageReducer,
        imagePopup: imagePopupReducer,
        favoriteCompany: favoriteCompanyReducer,
        searchDetails: searchDetailsPageReducer
    }
})



