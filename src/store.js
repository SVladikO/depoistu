import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'
import errorReducer from "./features/error/errorSlice";
import requestReducer from "./features/request/requestSlice";
import languageReducer from "./features/language/languageSlice";
import imagePopupReducer from "./features/imagePopup/imagePopupSlice";
import searchDetailsPageReducer from "./features/searchDetailsPage/searchDetailsPageSlice";

import {LOCAL_STORAGE_KEY, LocalStorage} from "./utils/localStorage";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        error: errorReducer,
        request: requestReducer,
        language: languageReducer,
        imagePopup: imagePopupReducer,
        searchDetailsPage: searchDetailsPageReducer
    }
})

LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, store.getState());

