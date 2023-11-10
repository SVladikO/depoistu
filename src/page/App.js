import React from 'react';
import {AllRoutes} from "utils/routes";
import LanguagePopup from "features/language/LanguagePopup";
import ShowIntro from "parts/showIntro/ShowIntro";

const App = () => {


    return (
        <>
            <ShowIntro/>
            <LanguagePopup/>
            <AllRoutes/>
        </>
    );
};

export default App;