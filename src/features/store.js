
import {configureStore} from "@reduxjs/toolkit";
import errorReducer from "./error/errorSlice";
import requestReducer from "./request/requestSlice";
import customerReducer from "./customer/customerSlice";
import languageReducer from "./language/languageSlice";
import imagePopupReducer from "./imagePopup/imagePopupSlice";
import editMenuReducer from "./editMenu/editMenuSlice";
import orderHistoryReducer from "./order-history/orderHistorySlice";
import favoriteCompanyReducer from "./favorite-company/favoriteComapnySlice";
import searchDetailsPageReducer from "./searchDetails/searchDetailsSlice";

export const createStore = () => configureStore({
    reducer: {
        error: errorReducer,
        request: requestReducer,
        customer: customerReducer,
        language: languageReducer,
        editMenu: editMenuReducer,
        imagePopup: imagePopupReducer,
        orderHistorySlice: orderHistoryReducer,
        favoriteCompany: favoriteCompanyReducer,
        searchDetails: searchDetailsPageReducer
    }
})



