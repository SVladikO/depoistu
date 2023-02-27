import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'
import requestReducer from "./features/request/requestSlice";
import errorReducer from "./features/error/errorSlice";
import imagePopupReducer from "./features/imagePopup/imagePopupSlice";
import introPopupReducer from "./features/introPopup/introPopupSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        request: requestReducer,
        error: errorReducer,
        imagePopup: imagePopupReducer,
        introPopup: introPopupReducer
    }
})

