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
import SubCategoryPage from "../page/sub-category/SubCategory.page";
import OrderCompleted from "../page/orderCompleted/orderCompleted";

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
    {...ROUTER.SING_IN, component: SignInPage},
    {...ROUTER.SING_UP, component: SingUpPage},
    {...ROUTER.CATEGORY, component: CategoryPage},
    {...ROUTER.CHANGE_PASSWORD, component: ChangePasswordPage},
    {...ROUTER.SETTING, component: SettingPage},
    {...ROUTER.SUB_CATEGORY, component: SubCategoryPage},
    {...ROUTER.ORDER_COMPLETED, component: OrderCompleted},
].map(r => <Route key={r.URL} path={r.URL} element={
    <MobileDevice>
        <NavigationHeader href={' '} title={r.TITLE}/>
        <Centralicer>
            <r.component/>
        </Centralicer>
    </MobileDevice>
}/>);

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
                <Route path={ROUTER.LOADING.URL} element={<LoadingPage/>}/>
            </Routes>

            <Routes>{routes}</Routes>


        </>
    );
};
