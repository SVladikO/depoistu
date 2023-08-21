import React from 'react';
import {AllRoutes} from "../utils/routes";
import {useLocalStorage} from "../utils/hook";
import {LOCAL_STORAGE_KEY} from "../utils/localStorage";
import {Popup} from "../components";
import {translate, TRANSLATION} from "../utils/translation";
import LanguagePopup from "../features/language/LanguagePopup";

const App = () => {
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const closeIntroPopup = () => setHideIntro(false);


    return (
        <>
            {showIntro && (
                <Popup.InfoText onClose={closeIntroPopup}>
                    {translate(TRANSLATION.INTRODUCTION)}
                </Popup.InfoText>)
            }
            <LanguagePopup />
            <AllRoutes />
        </>
    );
};

export default App;