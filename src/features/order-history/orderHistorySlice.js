import createSliceCustom from "features/utils";

const initialState = {
    value: []
}

export const orderHistorySlice = createSliceCustom({
    name: 'orderHistory',
    initialState,
    reducers: {
        addOrderHistories: (state, action) => {
            state.value =  action.payload
        },
    }
});

export const {addOrderHistories} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;