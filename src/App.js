import React from 'react';
import store from './store';
import {Provider} from 'react-redux';

import {Wrapper} from "./App.style";
import {getRoutes} from "./utils/navigation";

function App() {
    return (
        <Provider store={store}>
            <Wrapper>
                {getRoutes()}
            </Wrapper>
        </Provider>
    );
}

export default App;
