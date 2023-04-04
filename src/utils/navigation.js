import React from 'react';
import {Route, Routes} from "react-router-dom";

import {DEV_ROUTER, ROUTERS} from "./config";

import {COLOR} from './theme'

import CatalogPage from '../page/development/Catalog.page';
import ComponentsPage from '../page/development/Components.page';

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
`;

export const BottomWrapper = styled(PositionWrapper)`
  bottom: -1px;
`;
export const Centralicer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 90px 10px 110px;
`;

const routes = ROUTERS.map(r =>
    <Route
        key={r.URL}
        path={r.URL + (r.PARAMS || '')}
        element={
            <MobileDevice>
                <TopWrapper>
                    <NavigationHeader backUrl={r.BACK_URL} title={r.TITLE} getTitle={r.getTitle}>
                        {r.subHeader && <r.subHeader/>}
                    </NavigationHeader>
                </TopWrapper>
                <Centralicer>
                    <r.page/>
                </Centralicer>
                {r.showBottomMenu &&
                    <BottomWrapper>
                        <BottomMenu/>
                    </BottomWrapper>
                }
            </MobileDevice>
        }/>);

export const getRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={DEV_ROUTER.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER.PAGES} element={<CatalogPage/>}/>
                {routes}
            </Routes>
        </>
    );
};
