import {createSlice} from "@reduxjs/toolkit";
import {cities} from "./cities";
import {getRegions} from "../../utils/utils";

const initialState = {
    cities: getRegions(cities),
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
        },
        setIsRegion: (state, action) => {
            state.isRegion = action.payload;
        },
        setCities:(state,action) => {
            state.cities = action.payload;
        },
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload;
        },
    }
});

export const {
    showCityPopup,
    hideCityPopup,
    setSelectedRegion,
    setSelectedCity,
    setIsRegion,
    setCities
} = cityPopupSlice.actions;
export default cityPopupSlice.reducer;