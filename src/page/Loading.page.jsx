import React from "react";

import translations from "../utils/translations";

import {ReactComponent as LogoIcon} from "../icons/logo.svg";

import {Content, Wrapper, LogoText} from './Loading.style';
import {useDocumentTitle} from "../utils/utils";

function LoadingPage() {
    useDocumentTitle(translations.company_name);
    return (
        <Wrapper>
            <Content>
                <LogoIcon />
                <LogoText>{translations.company_name}</LogoText>
            </Content>
        </Wrapper>
    )
}

export default LoadingPage;