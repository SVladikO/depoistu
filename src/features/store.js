import {configureStore} from "@reduxjs/toolkit";
import orderReducer from './order/orderSlice'
import errorReducer from "./error/errorSlice";
import requestReducer from "./request/requestSlice";
import customerReducer from "./customer/customerSlice";
import languageReducer from "./language/languageSlice";
import imagePopupReducer from "./imagePopup/imagePopupSlice";
import orderHistoryReducer from "./order-history/orderHistorySlice";
import favoriteCompanyReducer from "./favorite-company/favoriteComapnySlice";
import searchDetailsPageReducer from "./searchDetailsPage/searchDetailsPageSlice";

export const createStore = () => configureStore({
    reducer: {
        order: orderReducer,
        error: errorReducer,
        request: requestReducer,
        customer: customerReducer,
        language: languageReducer,
        imagePopup: imagePopupReducer,
        orderHistorySlice: orderHistoryReducer,
        favoriteCompany: favoriteCompanyReducer,
        searchDetailsPage: searchDetailsPageReducer
    }
})



