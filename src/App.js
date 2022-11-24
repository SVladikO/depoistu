import React from 'react';

import './App.css';

import {Wrapper} from "./App.style";
import {getRoutes} from "./navigation";

function App() {
    return (
        <Wrapper>
            {getRoutes()}
        </Wrapper>
    );
}

export default App;
