import React from 'react';
import {Routes, Route} from "react-router-dom";
import ReduxIntroductionPage from './page/development/Redux-introduction.page'

import LinkMenu from './components/LinkMenu'

import CatalogPage from './page/development/Catalog.page'
import ComponentsPage from './page/development/Components.page'

import './App.css';

import {Wrapper} from "./App.style";
import {getNavigation, getPages} from "./page/LinksPage/Links.page";

function App() {
    return (
        <Wrapper>
            {getNavigation()}
            {getPages()}
        </Wrapper>
    );
}

export default App;
