import { configureStore} from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice'

export default configureStore({
    reducer: {
        order: orderReducer,
    }
})