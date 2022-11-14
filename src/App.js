import React from 'react';
import {Routes, Route} from "react-router-dom";
import ReduxIntroductionPage from './page/development/Redux-introduction.page'

import LinkMenu from './components/LinkMenu'

import CatalogPage from './page/development/Catalog.page'
import ComponentsPage from './page/development/Components.page'

import './App.css';
import LoadingPage from "./page/Loading.page";
import {Wrapper} from "./App.style";

const DevelopmentLinkMenuItems = [
    {to: '/redux', title: 'Redux'},
    {to: '/components', title: 'Components'},
    {to: '/catalog', title: 'Catalog'},
]

const AppLinkMenuItems = [
    {to: '/loading', title: 'Loading'},
]

function App() {
    return (
        <Wrapper>
            <LinkMenu items={DevelopmentLinkMenuItems} />
            <LinkMenu items={AppLinkMenuItems} />
            <Routes>
                {/* Development pages start */}
                <Route path="redux" element={<ReduxIntroductionPage/>}/>
                <Route path="catalog" element={<CatalogPage />}/>
                <Route path="components" element={<ComponentsPage />}/>
                {/* Development pages end */}

                <Route path="loading" element={<LoadingPage />} />
                {/*<Route path="redux" element={<ReduxIntroductionPage />} />*/}
            </Routes>
        </Wrapper>
    );
}

export default App;
