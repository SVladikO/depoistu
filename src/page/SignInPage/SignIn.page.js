import React from 'react';

import {Wrapper, Label, LeftSideContent, RightSideContent, ContentWrapper, TextContent, Content, LogoText} from "./SignIn.style";

import {
    ContentContainer,
    Input,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryWithIconButton,
    NavigationHeader
} from "../../components";

import translations from "../../translations";

import {ReactComponent as LogoIcon} from "../../icons/logo.svg";
import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";

import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";

const SignInPage = () => {
    return (
        <>
            <NavigationHeader href={' '} title="Sign in"/>
            <Wrapper>
                <Content style={{border: 'none', margin: ' 0 auto 28px auto', padding: '45px'}}>
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
            </Wrapper>
        </>
    );
};

export default SignInPage;