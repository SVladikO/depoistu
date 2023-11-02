import React from 'react';
import styled from 'styled-components'
import {Route, Routes} from "react-router-dom";

import {FixedWrapper, Footer} from "components";

import {DEV_ROUTER, ROUTERS} from "./config";

import ApiPage from "page/development/Api.page";
import AdminPage from "page/development/Admin.page";
import ComponentsPage from 'page/development/Components.page';

import {COLOR, DEVICE_WIDTH} from './theme';
import {useScrollUp, useHideOnScroll} from "./hook";

import {BottomMenu, NavigationHeader} from "components";
import ScrollUpButton from "../components/ScrollUpButton/ScrollUpButton";

import NotificationView from "page-view/notification/NotificationView";

export const MobileWrapper = styled.div`
  min-height: 90vh;
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  margin: 0 auto;
  position: relative;
  background: ${COLOR.ACCENT8};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 90px 0 0;
  min-height: 400px;
`;

const Element = (props) => {
    useScrollUp();
    useHideOnScroll('NavigationHeader', '-65px')

    const {route} = props;

    return (
        <MobileWrapper className="mobile-wrapper">
            <FixedWrapper fixTop id="NavigationHeader">
                <NavigationHeader title={route.TITLE} backUrl={route.backUrl}/>
            </FixedWrapper>
            <Content className="content-centralazer">
                <route.page/>
            </Content>
            <FixedWrapper fixBottom className='ta-BottomMenu'>
                <BottomMenu/>
            </FixedWrapper>
            <Footer/>
            <ScrollUpButton />
        </MobileWrapper>
    )
};

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={DEV_ROUTER.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={DEV_ROUTER.ADMIN} element={<AdminPage/>}/>
                <Route path={DEV_ROUTER.API} element={<ApiPage/>}/>
                {ROUTERS.map(r => (
                    <Route
                        key={r.URL}
                        path={r.URL + (r.PARAMS || '')}
                        element={<Element route={r}/>}
                    />
                ))}
            </Routes>
            <NotificationView/>
        </>
    );
};
