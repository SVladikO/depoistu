import React from "react";

import {Wrapper} from "./LanguagePopup.style";

import {Popup, ThirdButton} from "../../components";

import {LANGUAGE_KEYS} from "../../utils/translation";
import {enableScrollOnBody} from "../../components/Popup/Popup";
import {useSelector, useDispatch} from "react-redux";
import {closeLanguagePopup, setWebsiteLanguage} from "./languageSlice";

const LanguagePopup = () => {
    const dispatch = useDispatch();
    const isLanguagePopupVisible = useSelector(state => state.language.isLanguagePopupVisible)
    const siteLanguage = useSelector(state => state.language.siteLanguage)

    const setLanguage = selectedLanguage => () => {
        dispatch(setWebsiteLanguage(selectedLanguage));
        dispatch(closeLanguagePopup());
        enableScrollOnBody();

        if (siteLanguage !== selectedLanguage) {
            window.location.reload();
        }
    }

    const setUA = setLanguage(LANGUAGE_KEYS.UA)
    const setEN = setLanguage(LANGUAGE_KEYS.EN)

    if (!isLanguagePopupVisible) {
        return;
    }

    return (
        <Popup.Info showCloseButton={false}>
            <Wrapper>
                <ThirdButton onClick={setUA}>Українська</ThirdButton>
                <ThirdButton onClick={setEN}>English</ThirdButton>
            </Wrapper>
        </Popup.Info>
    );
}

export default LanguagePopup;