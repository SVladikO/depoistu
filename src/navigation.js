import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from './page/development/Catalog.page';
import ComponentsPage from './page/development/Components.page';
import ReduxIntroductionPage from "./page/development/Redux-introduction.page";
import {DEV_ROUTER, ROUTER} from "./config";
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
    {path: '/', element: SignInPage},
    {path: ROUTER.LOADING, element: LoadingPage},
    {path: ROUTER.SING_IN, element: SignInPage},
].map(r => <Route key={r.path} path={r.path} element={<PageWrapper><r.element /></PageWrapper>} /> );

export const getRoutes = () => {
    return (
        <>
            <Routes>
                {/* WEB APP PAGES */}
                {routes}

                {/* Development pages start */}
                <Route path={DEV_ROUTER.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER.REDUX} element={<ReduxIntroductionPage/>}/>
                <Route path={DEV_ROUTER.PAGES} element={<CatalogPage/>}/>
                {/* Development pages end */}

            </Routes>
        </>
    );
};
