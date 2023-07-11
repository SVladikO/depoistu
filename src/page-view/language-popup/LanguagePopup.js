import React from "react";

import {Wrapper} from "./LanguagePopup.style";

import {Popup, ThirdButton} from "../../components";

import {LANGUAGE_KEYS} from "../../utils/translation";

const LanguagePopup = ({onClose, setCurrentLanguage, showCloseButton= true}) => {
    const setUA = () => {
        setCurrentLanguage(LANGUAGE_KEYS.UA)
        onClose();
    }

    const setEN = () => {
        setCurrentLanguage(LANGUAGE_KEYS.EN)
        onClose();
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