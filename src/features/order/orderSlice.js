import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderItem: (state, action) => {
            const order = state.value.find(order => order.id === action.payload.id)

            if (!!order) {
                order.amount++;
                console.log(order)
                console.log(state.value)
                return ;
            }

            const orderCandidate = {amount: 1, ...action.payload};

            console.log('addOrderItem: ', orderCandidate)
            state.value.push(orderCandidate)
        },
        deleteAllOrders: (state) => {
            state.value = []
        },
        deleteOrderItem: (state, action) => {
            console.log('deleteOrderItem: ', action.payload, state.value.filter(item => item.id !== action.payload))
            state.value = state.value.filter(item => item.id !== action.payload)
        },
        decrementOrderItem: (state, action) => {
            const order = state.value.find(order => order.id === action.payload.id);

            if (order.amount === 1) {
                state.value = state.value.filter(order => order.id !== action.payload.id)
                return;
            }

            order.amount--;
        }
    }
});

export const {addOrderItem, deleteOrderItem, decrementOrderItem, deleteAllOrders} = orderSlice.actions;
export default orderSlice.reducer;