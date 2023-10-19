import createSliceCustom from "features/utils";

const initialState = {
    value: null
}

const customerSlice = createSliceCustom({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.value = action.payload;
        },
        deleteCustomer: (state) => {
            state.value = null;
        }
    }
});

export const {
    addCustomer,
    deleteCustomer
} = customerSlice.actions;

export default customerSlice.reducer;