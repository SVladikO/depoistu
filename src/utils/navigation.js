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
import {HistoryTabBar} from "../components";

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
  padding: 90px 25px 110px 25px;
`;

console.log({ROUTERS});

const tabs = ['Completed', 'Upcoming', 'Cancelled'];
const selectedTab = tabs[0];

function handleClick(c) {
    console.log(`${tabs[c]}`)
}


const routes = ROUTERS.map(r => <Route key={r.URL} path={r.URL + (r.PARAMS || '')} element={
    <MobileDevice>
        <TopWrapper>
            <NavigationHeader backUrl={r.BACK_URL} title={r.TITLE} getTitle={r.getTitle}>
                {r.TITLE === 'Order history completed' ? <HistoryTabBar selectedTab={tabs[0]} handleClick={handleClick} tabs={tabs}/> : null}
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
                {/* Development pages start */}
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
