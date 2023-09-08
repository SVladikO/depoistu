import createSliceCustom from "features/utils";

const initialState = {
    value: {
        isLoading: false
    }
}

export const requestSlice = createSliceCustom({
    name: 'request',
    initialState,
    reducers: {
        startLoading: state => {
            state.value.isLoading = true;
        },
        stopLoading: state => {
            state.value.isLoading = false;
        },
    }
});

export const {startLoading, stopLoading} = requestSlice.actions;
export default requestSlice.reducer;