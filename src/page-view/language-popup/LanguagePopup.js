import React from "react";

import {Wrapper} from "./LanguagePopup.style";

import {Popup, ThirdButton} from "../../components";

import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {useLocalStorage} from "../../utils/hook";
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
            <Wrapper>
                <ThirdButton onClick={setUA}>Українська</ThirdButton>
                <ThirdButton onClick={setEN}>English</ThirdButton>
            </Wrapper>
        </Popup.Info>
    );
}

export default LanguagePopup;