import React from 'react';
import {Route, Routes} from "react-router-dom";

import {DEV_ROUTER, ROUTER} from "./config";

import SignInPage from "../page/sing-in/SignIn.page";
import SingUpPage from "../page/sing-up/SingUp.page";
import LoadingPage from "../page/Loading.page";
import CatalogPage from '../page/development/Catalog.page';
import ComponentsPage from '../page/development/Components.page';
import ReduxIntroductionPage from "../page/development/Redux-introduction.page";

import styled from 'styled-components'
import {DEVICE_WIDTH} from "./theme";
import CategoryPage from "../page/category/Category.page";
import ChangePasswordPage from "../page/change-password/ChangePassword.page";
import {NavigationHeader} from "../components";

export const MobileDevice = styled.div`
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  margin: 0 auto;
  height: 100vh;

`;

export const Centralicer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 25px 25px 25px;
`;

const routes = [
    {path: ROUTER.SING_IN, element: SignInPage},
    {path: ROUTER.SING_UP, element: SingUpPage},
    {path: ROUTER.CATEGORY, element: CategoryPage},
    {path: ROUTER.CHANGE_PASSWORD, element: ChangePasswordPage},
].map(r =>

    <Route key={r.path} path={r.path} element={<r.element/>}/>

);

export const getRoutes = () => {
    return (
        <>
            <Routes>
                {/* Development pages start */}
                <Route path={'/'} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER.REDUX} element={<ReduxIntroductionPage/>}/>
                <Route path={DEV_ROUTER.PAGES} element={<CatalogPage/>}/>
                {/* Development pages end */}
            </Routes>

            <Routes>
                <Route path={ROUTER.LOADING} element={<LoadingPage/>}/>
            </Routes>

            <MobileDevice>
                <NavigationHeader href={' '} title="Sign in"/>
                {/* WEB APP PAGES */}
                <Centralicer>
                    <Routes>{routes}</Routes>
                </Centralicer>
            </MobileDevice>


        </>
    );
};
