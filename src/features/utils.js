import {createSlice} from "@reduxjs/toolkit";

function createSliceCustom(config) {
    const state = localStorage.getItem('reduxState');
    const persistedState = state ? JSON.parse(state) : {};
    const initialState = persistedState[config.name] || config.initialState;
    const persistedConfig = {...config, initialState};

    return createSlice(persistedConfig);
}

export default createSliceCustom;