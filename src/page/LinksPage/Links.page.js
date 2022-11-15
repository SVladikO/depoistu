import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from '../development/Catalog.page';
import ComponentsPage from '../development/Components.page';
import LoadingPage from "../Loading.page";
import LinkMenu from "../../component/LinkMenu";
import ReduxIntroductionPage from "../development/Redux-introduction.page";


const DevelopmentLinkMenuItems = [
    {to: '/redux', title: 'Redux'},
    {to: '/components', title: 'Components'},
    {to: '/catalog', title: 'Catalog'},
];

const AppLinkMenuItems = [
    {to: '/loading', title: 'Loading'},
];


console.log(`http://localhost:3000/${DevelopmentLinkMenuItems[1].title}`);
console.log(`http://localhost:3000/${DevelopmentLinkMenuItems[2].title}`);

const LinksPage = () => {
    return (
        <>
            <LinkMenu items={DevelopmentLinkMenuItems}/>
            <LinkMenu items={AppLinkMenuItems}/>
            <Routes>
                {/* Development pages start */}
                <Route path="redux" element={<ReduxIntroductionPage/>}/>
                <Route path="catalog" element={<CatalogPage/>}/>
                <Route path="components" element={<ComponentsPage/>}/>
                {/* Development pages end */}

                <Route path="loading" element={<LoadingPage/>}/>
                {/*<Route path="redux" element={<ReduxIntroductionPage />} />*/}
            </Routes>
        </>
    );
};

export default LinksPage;