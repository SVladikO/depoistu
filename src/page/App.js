import React from 'react';
import {AllRoutes} from "../utils/routes";
import {useLocalStorage} from "../utils/hook";
import {LOCAL_STORAGE_KEY} from "../utils/localStorage";
import {Footer, Popup} from "../components";
import {translate, TRANSLATION} from "../utils/translation";
import LanguagePopup from "../features/language/LanguagePopup";
import {PrimaryButton} from "../components";

const App = () => {
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const closeIntroPopup = () => setHideIntro(false);


    return (
        <>
            {showIntro && (
                <Popup.InfoText showCloseButton={false}>
                    <div>
                        {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_MAIN)}
                    </div>
                    <div>
                        {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_HELP)}
                    </div>
                    <div>
                        {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_TELL)}
                    </div>
                    <PrimaryButton isWide onClick={closeIntroPopup}>{translate(TRANSLATION.INTRODUCTION.BUTTON)}</PrimaryButton>
                </Popup.InfoText>)
            }
            <LanguagePopup />
            <AllRoutes />
            <Footer/>
        </>
    );
};

export default App;