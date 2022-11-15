import React from 'react';

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
