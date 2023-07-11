import React, {useState} from "react";

import {Notification, Popup} from '../components/index'
import {useLocalStorage} from "../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../utils/localStorage";
import LanguagePopup from "../page-view/language-popup/LanguagePopup";
import {DEFAULT_LANGUAGE, translate, TRANSLATION} from "../utils/translation";

const WebsiteIntro = () => {
    const [currentLanguage, setCurrentLanguage] = useLocalStorage(LOCAL_STORAGE_KEY.CURRENT_LANGUAGE);
    const [isShowLanguagePopup, setIsShowLanguagePopup] = useState(!currentLanguage);
    const closeLanguagePopup = () => setIsShowLanguagePopup(false);

    const [hideIntro, setHideIntro] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.HIDE_INTRO))

    const closePopup = () => {
        setHideIntro(true)
        LocalStorage.set(LOCAL_STORAGE_KEY.HIDE_INTRO, true)
    }

    return (
        <div>
            {!hideIntro && !isShowLanguagePopup && (
                <Popup.InfoText onClose={closePopup}>
                    {translate(TRANSLATION.INTRODUCTION)}
                </Popup.InfoText>)
            }
            {isShowLanguagePopup &&
                <LanguagePopup
                    onClose={closeLanguagePopup}
                    setCurrentLanguage={selectedLanguage => {
                        setCurrentLanguage(selectedLanguage);
                        if (DEFAULT_LANGUAGE !== selectedLanguage) {
                            window.location.reload();
                        }
                    }}
                    showCloseButton={false}
                />
            }
        </div>
    )
}
export default WebsiteIntro;

