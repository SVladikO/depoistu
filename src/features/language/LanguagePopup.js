import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {Popup, PrimaryButton} from "../../components";
import {enableScrollOnBody} from "../../components/Popup/Popup";

import {closeLanguagePopup, setWebsiteLanguage} from "./languageSlice";

import {LANGUAGE_KEYS} from "../../utils/translation";

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
            <PrimaryButton isWide clickHandler={setUA}>Українська</PrimaryButton>
            <PrimaryButton isWide clickHandler={setEN}>English</PrimaryButton>
        </Popup.Info>
    );
}

export default LanguagePopup;