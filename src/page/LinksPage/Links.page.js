import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from '../development/Catalog.page';
import ComponentsPage from '../development/Components.page';
import LinkMenu from '../../components/LinkMenu';
import ReduxIntroductionPage from "../development/Redux-introduction.page";
import {LINKS, ROUTER_MAP} from "../../config";

export const getNavigation = () => {
    return (
        <>
            <LinkMenu items={LINKS}/>
        </>
    )
}
export const getPages = () => {
    return (
        <>
            <Routes>
                {/* Development pages start */}
                <Route path={ROUTER_MAP.COMPONENTS} element={<ComponentsPage/>}/>
                <Route path={ROUTER_MAP.REDUX} element={<ReduxIntroductionPage/>}/>
                <Route path={ROUTER_MAP.PAGES} element={<CatalogPage/>}/>
                {/* Development pages end */}
            </Routes>
        </>
    );
};
