import React from 'react';

import {Wrapper} from "./App.style";
import {getRoutes} from "./utils/navigation";

function App() {
    return (
        <Wrapper>
            {getRoutes()}
        </Wrapper>
    );
}

export default App;
