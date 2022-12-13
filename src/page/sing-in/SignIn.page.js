import React from 'react';

import {
    LeftSideContent,
    RightSideContent,
    ContentWrapper,
    Content,
    LogoText,
    NavLabel
} from "./SignIn.style";

import {
    Input,
    PrimaryWideButton,
    PrimaryWithIconButton,
    SecondaryWithIconButton,
    ContentContainer,
    NavigationLabelHref
} from "../../components";

import translations from "../../utils/translations";

import {ReactComponent as LogoIcon} from "../../icons/logo.svg";
import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";

import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";
import {ROUTER} from '../../utils/config';

const SignInPage = () => {
    return (
        <>
            <Content>
                <LogoIcon/>
                <LogoText>{translations.company_name}</LogoText>
            </Content>
            <ContentContainer>
                <Input Icon={MailIcon} placeholder={`johndoe@mail.com`}/>
                <Input Icon={LockIcon} placeholder={`*********************`}/>
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
                <NavigationLabelHref
                    hrefTitle="Sing up!"
                    href={`${ROUTER.SING_UP}`}
                    label="You don’t have an account?"
                />
            </ContentContainer>
            <PrimaryWideButton><span>Sing in</span></PrimaryWideButton>
        </>
    );
};

export default SignInPage;