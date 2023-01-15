import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderItem: (state, action) => {
            console.log('addOrderItem: ', action.payload)
            state.value.push(action.payload)
        },
        deleteOrderItem: (state, action) => {
            console.log('deleteOrderItem: ', action.payload, state.value.filter(item => item.id !== action.payload))
            state.value = state.value.filter(item => item.id !== action.payload)
        }
    }
});

export const {addOrderItem, deleteOrderItem} = orderSlice.actions;
export default orderSlice.reducer;