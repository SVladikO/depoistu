import React from 'react';
import {Route, Routes} from "react-router-dom";

import {DEV_ROUTER, ROUTER, ROUTERS} from "./config";

import {COLOR} from './theme'

import LoadingPage from "../page/Loading.page";
import CatalogPage from '../page/development/Catalog.page';
import ComponentsPage from '../page/development/Components.page';
import ReduxIntroductionPage from "../page/development/Redux-introduction.page";

import styled from 'styled-components'
import {DEVICE_WIDTH} from "./theme";
import {BottomMenu, NavigationHeader} from "../components";

export const MobileDevice = styled.div`
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  margin: 0 auto;
  min-height: 100vh;
  background: ${COLOR.ACCENT2};
  position: relative;
`;

export const Centralicer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 25px 25px 25px;
`;

console.log({ROUTERS})
const routes =  ROUTERS.map(r => <Route key={r.URL} path={r.URL + (r.PARAMS || '')} element={
    <MobileDevice>
        <NavigationHeader href={' '} title={r.TITLE}/>
        <Centralicer>
            <r.page/>
        </Centralicer>
        {r.showBottomMenu && <BottomMenu/>}
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
