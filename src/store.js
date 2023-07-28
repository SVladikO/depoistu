import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'
import requestReducer from "./features/request/requestSlice";
import errorReducer from "./features/error/errorSlice";
import imagePopupReducer from "./features/imagePopup/imagePopupSlice";
import introReducer from "./features/intro/introSlice";
import languageReducer from "./features/language/languageSlice";
import {LOCAL_STORAGE_KEY, LocalStorage} from "./utils/localStorage";

console.log('store')
export const store = configureStore({
    reducer: {
        order: orderReducer,
        request: requestReducer,
        error: errorReducer,
        imagePopup: imagePopupReducer,
        intro: introReducer,
        language: languageReducer,
    }
})

LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, store.getState());

