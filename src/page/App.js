import React, {useEffect} from 'react';
import {AllRoutes} from "../utils/routes";
import {useLocalStorage, useNotification} from "../utils/hook";
import {LOCAL_STORAGE_KEY} from "../utils/localStorage";
import {Popup} from "../components";
import {translate, TRANSLATION} from "../utils/translation";
import LanguagePopup from "../features/language/LanguagePopup";
import {EVENT_TYPE, publishNotificationEvent} from "../utils/event";

const App = () => {
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const closeIntroPopup = () => setHideIntro(false);


    return (
        <>
            <div>

            </div>
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