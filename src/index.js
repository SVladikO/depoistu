import React from 'react';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import {Wrapper} from "./index.style";

import {store} from './store';
import reportWebVitals from './reportWebVitals';

import {checkAccess} from "./utils/security";
import {getRoutes} from "./utils/navigation";
import {showDevelopmentPageUrls} from "./utils/log";
import LanguagePopup from "./features/language/LanguagePopup";
import Intro from "./features/intro/Intro";
import {LOCAL_STORAGE_KEY, LocalStorage} from "./utils/localStorage";

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
                <Wrapper>
                    <div>
                        <Intro />
                        <LanguagePopup />
                    </div>
                    {getRoutes()}
                </Wrapper>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
