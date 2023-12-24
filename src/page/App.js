import React from 'react';
import {AllRoutes} from "utils/routes";
import LanguagePopup from "features/language/LanguagePopup";
import ShowIntro from "parts/showIntro/ShowIntro";
import {checkAccessForDevEnv} from "../utils/security";

checkAccessForDevEnv();

const App = () => {


    return (
        <>
            <AllRoutes/>
            <LanguagePopup/>
            <ShowIntro/>
        </>
    );
};

export default App;