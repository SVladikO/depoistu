import React from 'react';
import {AllRoutes} from "utils/routes";
import {useLocalStorage} from "utils/hook";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import {ContentContainer, Popup, Text22} from "components";
import {translate, TRANSLATION} from "utils/translation";
import LanguagePopup from "features/language/LanguagePopup";
import {PrimaryButton} from "components";

const App = () => {
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const closeIntroPopup = () => setHideIntro(false);

    return (
        <>
            {showIntro && (
                <Popup.Bottom onClose={closeIntroPopup}>
                    <ContentContainer noPadding noShadow>
                        <Text22>
                            {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_MAIN)}
                        </Text22>
                        <Text22>
                            {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_HELP)}
                        </Text22>
                        <Text22>
                            {translate(TRANSLATION.INTRODUCTION.INTRODUCTION_TELL)}
                        </Text22>
                        <PrimaryButton isWide clickHandler={closeIntroPopup}>
                            {translate(TRANSLATION.INTRODUCTION.BUTTON)}
                        </PrimaryButton>
                    </ContentContainer>
                </Popup.Bottom>)
            }
            <LanguagePopup/>
            <AllRoutes/>
        </>
    );
};

export default App;