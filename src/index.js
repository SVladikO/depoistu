import React from 'react';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import {store} from './store';
import reportWebVitals from './reportWebVitals';

import {checkAccess} from "./utils/security";
import {showDevelopmentPageUrls} from "./utils/log";
import App from "./page/App";

document.body.style.backgroundColor = '#d8d8d8';

const container = document.getElementById('root');
const root = createRoot(container);

checkAccess();
showDevelopmentPageUrls();

store.subscribe(() => {
    LocalStorage.set(LOCAL_STORAGE_KEY.REDUX_STATE, store.getState());
})

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
