import React from 'react';
import {ContentContainer, Popup, PrimaryButton, Text22} from "components";
import {translate, TRANSLATION} from "utils/translation";
import {ReactComponent as LogoIcon} from "assets/icons/logo.svg";
import {LogoContainer, Address, Wrapper} from "./ShowIntro.style";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import {enableScrollOnBody} from "../../components/Popup/Popup";

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
                <ContentContainer noPadding noShadow>
                    <Wrapper>
                        <LogoContainer>
                            <LogoIcon/>
                            <Address>depoistu.com</Address>
                        </LogoContainer>
                        {
                            translate(TRANSLATION.INTRODUCTION.TEXT)
                                .map(text => <Text22 key={text}>{text}</Text22>)
                        }
                    </Wrapper>
                    <PrimaryButton isWide clickHandler={closeIntroPopup}>
                        {translate(TRANSLATION.INTRODUCTION.BUTTON)}
                    </PrimaryButton>
                </ContentContainer>
            </Popup.Bottom>)}
        </>

    );
};

export default ShowIntro;