import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';

import {Wrapper} from "./index.style";

import {store} from './store';
import reportWebVitals from './reportWebVitals';

import {getRoutes} from "./utils/navigation";
import {showDevelopmentPageUrls} from "./utils/log";
import {checkAccess, setBrowserTabTitle} from "./utils/utils";
import {ImagePopup} from "./components";

const container = document.getElementById('root');
const root = createRoot(container);


setBrowserTabTitle()
checkAccess();
showDevelopmentPageUrls()

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Wrapper>
                    {getRoutes()}
                    <ImagePopup />
                </Wrapper>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
