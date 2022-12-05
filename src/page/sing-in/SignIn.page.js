import React from 'react';

import {
    Wrapper,
    Label,
    LeftSideContent,
    RightSideContent,
    ContentWrapper,
    Content,
    LogoText,
    NavLabel, Container
} from "./SignIn.style";

import {
    Input,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryWithIconButton,
    NavigationHeader
} from "../../components";

import translations from "../../utils/translations";

import {ReactComponent as LogoIcon} from "../../icons/logo.svg";
import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";

import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {Link} from "react-router-dom";

const SignInPage = () => {
    return (
        <>
            <NavigationHeader href={' '} title="Sign in"/>
            <Wrapper>
                <Content>
                    <LogoIcon/>
                    <LogoText>{translations.company_name}</LogoText>
                </Content>
                <Container>
                    <Input Icon={MailIcon} placeholder={`johndoe@mail.com`}/>
                    <div style={{marginTop: '11px'}}>
                        <Input Icon={LockIcon} placeholder={`*********************`}/>
                    </div>
                    <ContentWrapper>
                        <LeftSideContent>
                            <NavLabel primary={false}>Or login with</NavLabel>
                            <SecondaryWithIconButton><FacebookIcon/>facebook</SecondaryWithIconButton>
                        </LeftSideContent>
                        <RightSideContent>
                            <NavLabel primary>Forget password ?</NavLabel>
                            <PrimaryWithIconButton><GoogleIcon/>Google</PrimaryWithIconButton>
                        </RightSideContent>
                    </ContentWrapper>
                    <NavigationLabelHref hrefText="Sing in!" href={'sing-up'} label="Already have an account?"/>
                </Container>
                <PrimaryWideButton><span>Sing in</span></PrimaryWideButton>
            </Wrapper>
        </>
    );
};

export default SignInPage;