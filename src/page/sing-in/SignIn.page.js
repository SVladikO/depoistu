import React from 'react';

import {
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
    NavigationLabelHref,
    Flex
} from "../../components";

import translations from "../../utils/translations";

import {ReactComponent as LogoIcon} from "../../icons/logo.svg";
import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";

import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";
import {ROUTER} from '../../utils/config';
import {Link} from "react-router-dom";

const SignInPage = () => {
    return (
        <>
            <Content>
                <LogoIcon/>
                <LogoText>{translations.company_name}</LogoText>
            </Content>
            <ContentContainer>
                <Input Icon={MailIcon} placeholder={`Enter email`} />
                <Input Icon={LockIcon} placeholder={`Enter password`} type="password"/>
                <Flex flexDirection='column'>
                    <Flex justifyContent="space-between">
                        <NavLabel primary={false}>Or login with</NavLabel>
                        <Link to={ROUTER.CHANGE_PASSWORD.URL} primary>Forget password ?</Link>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <SecondaryWithIconButton><FacebookIcon/>facebook</SecondaryWithIconButton>
                        <PrimaryWithIconButton><GoogleIcon/>Google</PrimaryWithIconButton>
                    </Flex>
                </Flex>
                <NavigationLabelHref
                    hrefTitle="Sing up!"
                    to={ROUTER.SING_UP.URL}
                    label="You don’t have an account?"
                />
            </ContentContainer>
            <PrimaryWideButton><span>Sing in</span></PrimaryWideButton>
        </>
    );
};

export default SignInPage;