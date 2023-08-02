import {createSlice} from "@reduxjs/toolkit";
import {LOCAL_STORAGE_KEY} from "../utils/localStorage";

function createSliceCustom(config) {
    const state = localStorage.getItem(LOCAL_STORAGE_KEY.REDUX_STATE);
    const persistedState = state ? JSON.parse(state) : {};
    const initialState = persistedState[config.name] || config.initialState;
    const persistedConfig = {...config, initialState};

    return createSlice(persistedConfig);
}

export default createSliceCustom;