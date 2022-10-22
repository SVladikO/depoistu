import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import ReduxIntroductionPage from './page/Redux-introduction.page'

import LinkMenu from './component/LinkMenu'

import HomePage from './page/Home.page'
import CatalogPage from './page/Catalog.page'
import ComponentsPage from './page/Components.page'

import './App.css';

const LinkMenuItems = [
    {to: '/redux', title: 'Redux'},
    {to: '/components', title: 'Components'},
    {to: '/catalog', title: 'Catalog'},
]

function App() {
    return (
        <div>
            <LinkMenu items={LinkMenuItems} />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="redux" element={<ReduxIntroductionPage/>}/>
                <Route path="catalog" element={<CatalogPage />}/>
                <Route path="components" element={<ComponentsPage />}/>
                {/*<Route path="redux" element={<ReduxIntroductionPage />} />*/}
                {/*<Route path="redux" element={<ReduxIntroductionPage />} />*/}
            </Routes>

        </div>
    );
}

export default App;
