import {createSlice} from "@reduxjs/toolkit";
import {cities} from "./cities";
import {getRegions} from "../../utils/utils";

const initialState = {
    city: getRegions(cities),
    selectedCity: '',
    selectedRegion: '',
    isRegion: true,
    isVisible: false
}



export const cityPopupSlice = createSlice({
    name: 'cityPopup',
    initialState,
    reducers: {
        showCityPopup: state => {
            state.isVisible = true;
        },
        hideCityPopup: state => {state.isVisible = false},
        setSelectedRegion: (state, action) => {
            state.selectedRegion = action.payload;
            state.city = cities[action.payload];
            state.isRegion = false;
        },
        showRegions: (state, action) => {
            state.city = action.payload;
            state.isRegion = true;
        },
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload;
            state.isVisible = false;
        },
    }
});

export const {
    showCityPopup,
    hideCityPopup,
    setSelectedRegion,
    setSelectedCity,
    showRegions
} = cityPopupSlice.actions;
export default cityPopupSlice.reducer;