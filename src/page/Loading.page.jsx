import React from "react";

import translations from "../translations";

import {ReactComponent as LogoIcon} from "../icons/logo.svg";

import {Content, Wrapper, LogoText} from './Loading.style';
import {THEME} from "../theme";


function LoadingPage() {
    return (
        <Wrapper>
            <Content>
                <LogoIcon style={{width:'140px',height: '140px', fill: THEME.COLOR.PRIMARY}}/>
                <LogoText>{translations.company_name}</LogoText>
            </Content>
        </Wrapper>
    )
}

export default LoadingPage;