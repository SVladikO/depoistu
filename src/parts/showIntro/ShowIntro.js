import React from 'react';
import {ContentContainer, Popup, PrimaryButton, Text22} from "../../components";
import {translate, TRANSLATION} from "../../utils/translation";
import {ReactComponent as LogoIcon} from "../../assets/icons/logo.svg";
import {LogoContainer} from "./ShowIntro.style";

const ShowIntro = ({closeIntroPopup}) => {
    return (
        <Popup.Bottom onClose={closeIntroPopup}>
            <ContentContainer noPadding noShadow>
                <LogoContainer>
                    <LogoIcon/>
                    <div>depoistu.com</div>
                </LogoContainer>
                {
                    translate(TRANSLATION.INTRODUCTION.TEXT)
                        .map(text => <Text22 key={text}>{text}</Text22>)
                }
                <PrimaryButton isWide clickHandler={closeIntroPopup}>
                    {translate(TRANSLATION.INTRODUCTION.BUTTON)}
                </PrimaryButton>
            </ContentContainer>
        </Popup.Bottom>
    );
};

export default ShowIntro;