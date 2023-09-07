import React from 'react';
import {AllRoutes} from "../utils/routes";
import {useLocalStorage} from "../utils/hook";
import {LOCAL_STORAGE_KEY} from "../utils/localStorage";
import {Popup, Text22} from "../components";
import {translate, TRANSLATION} from "../utils/translation";
import LanguagePopup from "../features/language/LanguagePopup";
import {PrimaryButton} from "../components";

const App = () => {
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const closeIntroPopup = () => setHideIntro(false);

    return (
        <>
            {showIntro && (
                <Popup.Info position='end' noPadding>
                    <>
                        <Text22>
                            {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_MAIN)}
                        </Text22>
                        <Text22>
                            {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_HELP)}
                        </Text22>
                        <Text22>
                            {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_TELL)}
                        </Text22>
                        <PrimaryButton isWide
                                       onClick={closeIntroPopup}>{translate(TRANSLATION.INTRODUCTION.BUTTON)}</PrimaryButton>
                    </>
                </Popup.Info>)
            }
            <LanguagePopup/>
            <AllRoutes/>
        </>
    );
};

export default App;