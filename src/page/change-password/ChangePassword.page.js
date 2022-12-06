import React from 'react';

import {
    Wrapper,
    Label,
    LeftSideContent,
    RightSideContent,
    ContentWrapper,
    TextContent,
    Content,
    LogoText
} from "./ChangePassword.style";

import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryWithIconButton,
    NavigationHeader, PrimaryRoundedButton
} from "../../components";

import translations from "../../utils/translations";

import {ReactComponent as LogoIcon} from "../../icons/logo.svg";
import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";

import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";

const ChangePasswordPage = () => {
    return (
        <>
            <NavigationHeader href={' '} title="Change Password"/>
            <Wrapper>
                <ContentContainer>
                    <Input withSwitcher placeholder={`Old password`}/>
                    <RowSplitter />
                    <Input withSwitcher placeholder={`Password`}/>
                    <RowSplitter height="11px"/>
                    <Input withSwitcher placeholder={`Confirm`}/>
                    <RowSplitter height="20px"/>
                    <PrimaryRoundedButton>Sing in</PrimaryRoundedButton>
                </ContentContainer>
            </Wrapper>
        </>
);
};

export default ChangePasswordPage;