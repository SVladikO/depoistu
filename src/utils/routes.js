import React from 'react';
import styled from 'styled-components'
import {Route, Routes} from "react-router-dom";

import {FixedWrapper, Footer} from "components";

import {DEV_ROUTER, ROUTERS} from "./config";

import AdminPage from "page/development/Admin.page";

import {COLOR, DEVICE_WIDTH} from './theme';

import {BottomMenu, NavigationHeader} from "components";
import ScrollUpButton from "../components/ScrollUpButton/ScrollUpButton";

import NotificationView from "../page-view/notification/notification-view";

export const HeightWrapper = styled.div`
  min-height: 60vh;
`;

export const MobileWrapper = styled.div`
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  margin: 0 auto;
  position: relative;
  background: ${COLOR.ACCENT4};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    min-height: 400px;
    padding: ${p => p.disablePageHeaderBottomMargin ? 54 : 80}px 0 0;
`;

const Element = (props) => {
    const {route} = props;
    //TODO: temporary desabled hide header on scroll
    // useHideOnScroll('NavigationHeader', '-65px', route.disableHideHeaderOnScroll)

    return (
        <MobileWrapper className="mobile-wrapper">
            <HeightWrapper>
                {route.TITLE && (
                    <FixedWrapper fixTop id="NavigationHeader">
                        <NavigationHeader title={route.TITLE} backUrl={route.backUrl}/>
                    </FixedWrapper>
                )
                }
                <Content className="content-centralazer" disablePageHeaderBottomMargin={route.disablePageHeaderBottomMargin}>
                    <route.page/>
                </Content>
                {route.showBottomMenu && (
                    <FixedWrapper fixBottom className='ta-BottomMenu'>
                        <BottomMenu/>
                    </FixedWrapper>
                )
                }
            </HeightWrapper>
            <Footer/>
            <ScrollUpButton/>
        </MobileWrapper>
    )
};

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={DEV_ROUTER.ADMIN} element={<AdminPage/>}/>
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
