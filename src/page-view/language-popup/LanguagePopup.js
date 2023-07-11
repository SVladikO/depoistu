import React from "react";

import {Popup, ThirdButton} from "../../components";
import {useLocalStorage} from "../../utils/hook";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {languageKey} from "../../utils/translation";

const LanguagePopup = ({onClose}) => {
    const [, setCurrentLanguage] = useLocalStorage(LOCAL_STORAGE_KEY.CURRENT_LANGUAGE, languageKey.ua);

    const setUA = () => {
        setCurrentLanguage(languageKey.ua)
        onClose();
    }

    const setEN = () => {
        setCurrentLanguage(languageKey.en)
        onClose();
    }

    return (
        <Popup.Info onClose={onClose}>
            <ThirdButton onClick={setUA}>Українська</ThirdButton>
            <ThirdButton onClick={setEN}>English</ThirdButton>
        </Popup.Info>
    );
}

export default LanguagePopup;