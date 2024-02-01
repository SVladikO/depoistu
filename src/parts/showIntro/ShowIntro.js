import React from 'react';

import {LogoContainer, Address, Wrapper, Overflow} from "./ShowIntro.style";

import {enableScrollOnBody} from "components/Popup/Popup";
import {ReactComponent as LogoIcon} from "assets/icons/logo.svg";
import {Popup, PrimaryButton, Text22} from "components";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";

const ShowIntro = () => {
    const scrollUp = useScrollUp();
    const [showIntro, setHideIntro] = useLocalStorage(LOCAL_STORAGE_KEY.SHOW_INTRO, true);
    const closeIntroPopup = () => {
        scrollUp();
        enableScrollOnBody();
        setHideIntro(false);
    }

    return (
        <>
            {showIntro && (<Popup.Bottom onClose={closeIntroPopup}>
                <Overflow className={"overflow-container"}>
                    <Wrapper>
                        <Address>depoistu.com</Address>
                        <LogoContainer>
                            <LogoIcon/>
                        </LogoContainer>
                        {
                            translate(TRANSLATION.INTRODUCTION.TEXT)
                                .map(text => <Text22 key={text}>{text}</Text22>)
                        }
                        <PrimaryButton isWide clickHandler={closeIntroPopup}>
                            {translate(TRANSLATION.INTRODUCTION.BUTTON)}
                        </PrimaryButton>
                    </Wrapper>
                </Overflow>
            </Popup.Bottom>)}
        </>

    );
};

export default ShowIntro;