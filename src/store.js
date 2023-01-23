import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'
import requestReducer from "./features/request/requestSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        request: requestReducer
    }
})

