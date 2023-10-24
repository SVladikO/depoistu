import React from 'react';
import {AllRoutes} from "utils/routes";
import {useLocalStorage} from "utils/hook";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import LanguagePopup from "features/language/LanguagePopup";
import ShowIntro from "../parts/showIntro/ShowIntro";

const App = () => {
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const closeIntroPopup = () => setHideIntro(false);

    return (
        <>
            {showIntro && <ShowIntro closeIntroPopup={closeIntroPopup}/>}
            <LanguagePopup/>
            <AllRoutes/>
        </>
    );
};

export default App;