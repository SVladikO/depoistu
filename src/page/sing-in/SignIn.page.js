import React, {useState} from 'react';

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

import {Link, useNavigate} from "react-router-dom";

import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";
import {fetchData} from "../../fetch/fetch";
import {getParam, LocalStorage} from "../../utils/utils";
import {BE_API, ROUTER} from '../../utils/config';

const SignInPage = () => {
    const [email, setEmail] = useState('vlad_S@gmail.com')
    const [password, setPassword] = useState('vv11vv')
    const navigate = useNavigate();
    const backUrl = getParam(`backUrl`) || ROUTER.CATEGORY.URL;
    const handleSingIn = () => {

        fetchData(BE_API.SING_IN(), {email, password})
            .then(res => {
                if (res.length > 0) {
                    localStorage.setItem('guest', JSON.stringify(res[0]))
                    navigate(-1);
                }
                if(!localStorage.getItem('guest')){
                    alert('User was not found');
                }

            });
    }

    const isGuestLogged = LocalStorage.getGuest();

    if (isGuestLogged) {
        return <div>You already logged!</div>
    }

    return (
        <>
            <Content>
                <LogoIcon/>
                <LogoText>{translations.company_name}</LogoText>
            </Content>
            <ContentContainer>
                <Input Icon={MailIcon} placeholder={`Enter email`} value={email}/>
                <Input Icon={LockIcon} placeholder={`Enter password`} type="password" value={password}/>
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
                    to={`${ROUTER.SING_UP.URL}?backUrl=${backUrl}`}
                    label="You don’t have an account?"
                />
            </ContentContainer>
            <PrimaryWideButton onClick={handleSingIn}><span>Sing in</span></PrimaryWideButton>
        </>
    );
};

export default SignInPage;