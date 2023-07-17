import React from 'react';
import {Route, Routes} from "react-router-dom";

import {DEV_ROUTER, ROUTERS} from "./config";

import {COLOR} from './theme'

import CatalogPage from '../page/development/Catalog.page';
import ComponentsPage from '../page/development/Components.page';

import styled from 'styled-components'
import {DEVICE_WIDTH} from "./theme";
import {BottomMenu, NavigationHeader} from "../components";
import AdminPage from "../page/development/Admin.page";
import {useHideOnScroll, useScrollUp} from "./hook";

export const MobileDevice = styled.div`
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  margin: 0 auto;
  min-height: 100vh;
  background: ${COLOR.ACCENT2};
  position: relative;
`;

export const PositionWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

export const TopWrapper = styled(PositionWrapper)`
  top: 0;
  transition: top 0.3s;
`;

export const BottomWrapper = styled(PositionWrapper)`
  bottom: -1px;
`;
export const Centralicer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 90px 10px 110px;
  min-height: 500px;
`;

const routes = ROUTERS.map(r => {

    const Element = () => {

        useScrollUp();
        useHideOnScroll('TopWrapper', '-65px')

        return (
            <MobileDevice className="MobileDevice">
                <TopWrapper id="TopWrapper">
                    <NavigationHeader backUrl={r.BACK_URL} title={r.TITLE}>
                        {r.subHeader && <r.subHeader/>}
                    </NavigationHeader>
                </TopWrapper>
                <Centralicer className="Centralicer">
                    <r.page/>
                </Centralicer>
                {r.showBottomMenu && (
                    <BottomWrapper>
                        <BottomMenu/>
                    </BottomWrapper>
                )}
            </MobileDevice>
        )
    };

    return (
        <Route
            key={r.URL}
            path={r.URL + (r.PARAMS || '')}
            element={<Element />}
        />)
});

export const getRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={DEV_ROUTER.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER.PAGES} element={<CatalogPage/>}/>
                <Route path={DEV_ROUTER.ADMIN} element={<AdminPage/>}/>
                {routes}
            </Routes>

        </>
    );
};
