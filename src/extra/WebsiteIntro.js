import React from "react";

import {Popup} from '../components/index'
import {useLocalStorage} from "../utils/hook";
import {LOCAL_STORAGE_KEY} from "../utils/localStorage";
import LanguagePopup from "../page-view/language-popup/LanguagePopup";
import {translate, TRANSLATION} from "../utils/translation";

const WebsiteIntro = () => {
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const [currentLanguage] = useLocalStorage(LOCAL_STORAGE_KEY.CURRENT_LANGUAGE);

    const closeIntroPopup = () => setHideIntro(false);

    return (
        <div>
            {showIntro && currentLanguage && (
                <Popup.InfoText onClose={closeIntroPopup}>
                    {translate(TRANSLATION.INTRODUCTION)}
                </Popup.InfoText>)
            }
            {!currentLanguage &&
                <LanguagePopup
                    showCloseButton={false}
                />
            }
        </div>
    )
}
export default WebsiteIntro;

