import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'

export const store = configureStore({
    reducer: {
        order: orderReducer,
    }
})

