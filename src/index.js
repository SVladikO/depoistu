import React from 'react';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
// devManagement should be above other imports as it's responsible by page reload
import {createStore} from './features/store';
import App from "./page/App";
import {LocalStorage, LOCAL_STORAGE_KEY} from "./utils/localStorage";

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore();

LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, store.getState());
store.subscribe(() => {
    LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, store.getState());
})

root.render(
    <React.Fragment>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
