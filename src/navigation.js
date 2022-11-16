import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from './page/development/Catalog.page';
import ComponentsPage from './page/development/Components.page';
import ReduxIntroductionPage from "./page/development/Redux-introduction.page";
import {DEV_ROUTER_MAP, ROUTER_MAP} from "./config";
import LoadingPage from "./page/Loading.page";
import SignInPage from "./page/SignInPage/SignIn.page";

export const getRoutes = () => {
    return (
        <>
            <Routes>
                {/* WEB APP PAGES */}
                <Route path={ROUTER_MAP.LOADING} element={<LoadingPage />} />
                <Route path="/" element={<SignInPage />} />
                <Route path={ROUTER_MAP.SING_IN} element={<SignInPage />} />


                {/* Development pages start */}
                <Route path={DEV_ROUTER_MAP.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER_MAP.REDUX} element={<ReduxIntroductionPage/>}/>
                <Route path={DEV_ROUTER_MAP.PAGES} element={<CatalogPage/>}/>
                {/* Development pages end */}

            </Routes>
        </>
    );
};
