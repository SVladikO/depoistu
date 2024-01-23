import React from 'react';
import {useNavigate} from "react-router-dom";

import {Wrapper, Address, LogoContainer} from "./project-updated.page.style";

import {ReactComponent as LogoIcon} from "assets/icons/logo.svg";

import {URL} from 'utils/config'
import {useScrollUp} from "utils/hook";
import {PrimaryButton, Text22} from "components";
import {translate, TRANSLATION} from "utils/translation";
import packageJson from "./../../../package.json"

const ProjectUpdatedPage = () => {
    useScrollUp();
    const navigate = useNavigate();
    const closeIntroPopup = () => {
        navigate(URL.SEARCH)
    }

    return (
        <Wrapper>
            <Text22>{translate(TRANSLATION.PAGE.PROJECT_UPDATED.CONTENT)}</Text22>
            <Text22>{packageJson.version}</Text22>
            <LogoContainer>
                <LogoIcon/>
                <Address>depoistu.com</Address>
            </LogoContainer>

            <PrimaryButton isWide clickHandler={closeIntroPopup} withPadding>
                {translate(TRANSLATION.PAGE.PROJECT_UPDATED.BUTTON)}
            </PrimaryButton>
        </Wrapper>
    )
}

export default ProjectUpdatedPage;