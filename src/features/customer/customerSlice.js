import createSliceCustom from "features/utils";

const initialState = {
    value: null
}

export const customerSlice = createSliceCustom({
    name: 'language',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            console.log(1111, action.payload)
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