import React from 'react';
import {Route, Routes} from "react-router-dom";

import {DEV_ROUTER, ROUTER} from "./config";

import {COLOR} from './theme'

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
import SettingPage from "../page/setting/Setting.page";
import UserAccauntPage from "../page/user-account/UserAccaunt.page";
import SubCategoryPage from "../page/sub-category/SubCategory.page";

export const MobileDevice = styled.div`
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  margin: 0 auto;
  min-height: 100vh;
  background: ${COLOR.ACCENT2};

`;

export const Centralicer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 25px 25px 25px;
`;

// Creation router +
const routes = [
    {path: ROUTER.SING_IN, component: SignInPage},
    {path: ROUTER.SING_UP, component: SingUpPage},
    {path: ROUTER.CATEGORY, component: CategoryPage},
    {path: ROUTER.CHANGE_PASSWORD, component: ChangePasswordPage},
    {path: ROUTER.SETTING, component: SettingPage},
    {path: ROUTER.SUB_CATEGORY, component: SubCategoryPage},
].map(r => <Route key={r.path} path={r.path} element={
    <MobileDevice>
        <NavigationHeader href={' '} title={rightStr(r.path)}/>
        <Centralicer>
            <r.component/>
        </Centralicer>
    </MobileDevice>
}/>);

/*
* I really didn't know how to make a right string in Navigation header for current component
* so I made this function
* */

function rightStr(str){
    return `${str[0].toUpperCase()}${str.slice(1)}`.replaceAll('-',' ');
}

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

            <Routes>{routes}</Routes>


        </>
    );
};
