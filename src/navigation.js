import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from './page/development/Catalog.page';
import ComponentsPage from './page/development/Components.page';
import ReduxIntroductionPage from "./page/development/Redux-introduction.page";
import {DEV_ROUTER_MAP, ROUTER_MAP} from "./config";
import LoadingPage from "./page/Loading.page";
import SignInPage from "./page/sing-in/SignIn.page";

import styled from 'styled-components'

export const PageWrapper = styled.div`
  min-width: 370px;
  max-width: 414px;
  margin: 0 auto;
  height: 100vh;
`;

const routes = [
    {path: ROUTER_MAP.HOME, element: SignInPage},
    {path: ROUTER_MAP.LOADING, element: LoadingPage},
    {path: ROUTER_MAP.SING_IN, element: SignInPage},
].map(r => <Route path={r.path} element={<PageWrapper><r.element /></PageWrapper>} /> );

export const getRoutes = () => {
    return (
        <>
            <Routes>
                {/* WEB APP PAGES */}
                {routes}

                {/* Development pages start */}
                <Route path={DEV_ROUTER_MAP.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER_MAP.REDUX} element={<ReduxIntroductionPage/>}/>
                <Route path={DEV_ROUTER_MAP.PAGES} element={<CatalogPage/>}/>
                {/* Development pages end */}

            </Routes>
        </>
    );
};
