import React from 'react';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import {store} from './store';
import App from "./page/App";

import reportWebVitals from './reportWebVitals';

import {checkAccess} from "./utils/security";
import {showDevelopmentPageUrls} from "./utils/log";
import {LocalStorage, LOCAL_STORAGE_KEY} from "./utils/localStorage";
import packageInfo from "../package.json";

const container = document.getElementById('root');
const root = createRoot(container);

console.log(`v${packageInfo.version}`);
checkAccess();
showDevelopmentPageUrls();

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
