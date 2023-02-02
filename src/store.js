import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'
import requestReducer from "./features/request/requestSlice";
import errorReducer from "./features/error/errorSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        request: requestReducer,
        error: errorReducer,
        modal: modalReducer
    }
})

