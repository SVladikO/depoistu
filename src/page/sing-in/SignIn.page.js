import React from 'react';

import {
    Label,
    LeftSideContent,
    RightSideContent,
    ContentWrapper,
    TextContent,
    Content,
    LogoText
} from "./SignIn.style";

import {
    ContentContainer,
    Input,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryWithIconButton,
} from "../../components";

import translations from "../../utils/translations";

import {ReactComponent as LogoIcon} from "../../icons/logo.svg";
import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";

import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";

const SignInPage = () => {
    return (
        <>
            <Content>
                <LogoIcon/>
                <LogoText>{translations.company_name}</LogoText>
            </Content>
            <ContentContainer>
                <Input Icon={MailIcon} placeholder={`johndoe@mail.com`}/>
                <div style={{marginTop: '11px'}}>
                    <Input Icon={LockIcon} placeholder={`*********************`}/>
                </div>
                <ContentWrapper>
                    <LeftSideContent>
                        <Label primary={false}>Or login with</Label>
                        <SecondaryWithIconButton><FacebookIcon/>facebook</SecondaryWithIconButton>
                    </LeftSideContent>
                    <RightSideContent>
                        <Label primary>Forget password ?</Label>
                        <PrimaryWithIconButton><GoogleIcon/>Google</PrimaryWithIconButton>
                    </RightSideContent>
                </ContentWrapper>
                <TextContent>
                    <Label primary={false}>Already have an account?</Label>
                    <Label primary={true}>Sing up !</Label>
                </TextContent>
            </ContentContainer>
            <PrimaryWideButton>Sing in</PrimaryWideButton>
        </>
    );
};

export default SignInPage;