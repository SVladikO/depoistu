import React from "react";

import {Wrapper} from "./LanguagePopup.style";

import {Popup, ThirdButton} from "../../components";

import {LANGUAGE_KEYS} from "../../utils/translation";
import {enableScrollOnBody} from "../../components/Popup/Popup";

const LanguagePopup = ({onClose, setCurrentLanguage, showCloseButton= true}) => {
    const setUA = () => {
        setCurrentLanguage(LANGUAGE_KEYS.UA)
        onClose();
        enableScrollOnBody()
    }

    const setEN = () => {
        setCurrentLanguage(LANGUAGE_KEYS.EN)
        onClose();
        enableScrollOnBody()
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