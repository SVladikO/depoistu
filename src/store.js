import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'
import requestReducer from "./features/request/requestSlice";
import errorReducer from "./features/error/errorSlice";
import imagePopupReducer from "./features/imagePopup/imagePopupSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        request: requestReducer,
        error: errorReducer,
        imagePopup: imagePopupReducer

    }
})

