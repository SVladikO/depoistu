import React from 'react';
import styled from 'styled-components'
import {Route, Routes} from "react-router-dom";

import {FixedWrapper} from "../components";


import {DEV_ROUTER, ROUTERS} from "./config";

import ApiPage from "../page/development/Api.page";
import AdminPage from "../page/development/Admin.page";
import ComponentsPage from '../page/development/Components.page';

import {COLOR, DEVICE_WIDTH} from './theme';
import {useHideOnScroll, useScrollUp} from "./hook";

import {BottomMenu, NavigationHeader} from "../components";

import NotificationView from "../page-view/notification/NotificationView";


export const Wrapper = styled.div`
  min-height: 90vh;
  margin: 0 auto;
  position: relative;
`;
export const MobileDevice = styled.div`
  min-height: 90vh;
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  margin: 0 auto;
  position: relative;
  background: ${COLOR.ACCENT2};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 90px 10px 110px;
  min-height: 500px;
`;

const Element = (props) => {
    useScrollUp();
    useHideOnScroll('NavigationHeader', '-65px')

    const {route} = props;

    return (
        <MobileDevice>
            <FixedWrapper fixTop id="NavigationHeader">
                <NavigationHeader title={route.TITLE} backUrl={route.backUrl}/>
            </FixedWrapper>
            <Content className="Centralicer">
                <route.page/>
            </Content>
            <FixedWrapper fixBottom className='ta-BottomMenu'>
                <BottomMenu/>
            </FixedWrapper>
        </MobileDevice>
    )
};

export const AllRoutes = () => {
    return (
        <Wrapper>
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
        </Wrapper>
    );
};
