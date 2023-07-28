import React from "react";

import {Wrapper} from "./LanguagePopup.style";

import {Popup, ThirdButton} from "../../components";

import {DEFAULT_LANGUAGE, LANGUAGE_KEYS} from "../../utils/translation";
import {enableScrollOnBody} from "../../components/Popup/Popup";
import {useLocalStorage} from "../../utils/hook";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";

const LanguagePopup = ({onClose=() => {}, showCloseButton, isShow=false}) => {
    const [currentLanguage, setCurrentLanguage] = useLocalStorage(LOCAL_STORAGE_KEY.CURRENT_LANGUAGE);

    const setLanguage = language => () => {
        setCurrentLanguage(language);
        enableScrollOnBody();
        if (currentLanguage ? language !== currentLanguage : language !== DEFAULT_LANGUAGE) {
            window.location.reload();
        }
        onClose();
    }

    const setUA = setLanguage(LANGUAGE_KEYS.UA)
    const setEN = setLanguage(LANGUAGE_KEYS.EN)

    if (currentLanguage && !isShow) {
        return;
    }


    return (
        <Popup.Info onClose={onClose} showCloseButton={showCloseButton}>
            <Wrapper>
                <ThirdButton onClick={setUA}>Українська</ThirdButton>
                <ThirdButton onClick={setEN}>English</ThirdButton>
            </Wrapper>
        </Popup.Info>
    );
}

export default LanguagePopup;