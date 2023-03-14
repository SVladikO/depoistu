import React, {useState} from 'react';

// import {
//     Content,
//     LogoText,
//     NavLabel
// } from "./SignIn.style";

import {
    Input,
    PrimaryWideButton,
    // PrimaryWithIconButton,
    // SecondaryWithIconButton,
    // Flex,
    ContentContainer,
    NavigationLabelHref,
} from "../../components";

// import translations from "../../utils/translations";
// import {ReactComponent as LogoIcon} from "../../icons/logo.svg";
// import {ReactComponent as GoogleIcon} from "../../icons/google.svg";
// import {ReactComponent as FacebookIcon} from "../../icons/facebook.svg";
import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";

import {Link, useNavigate} from "react-router-dom";


import {fetchData} from "../../utils/fetch";
import {getParam, LocalStorage} from "../../utils/utils";
import {BE_API, ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";


const SignInPage = () => {
    const [email, setEmail] = useState('vlad_S@gmail.com')
    const [password, setPassword] = useState('vv11vv')
    const navigate = useNavigate();
    const backUrl = getParam(`backUrl`);
    const handleSingIn = () => {

        fetchData(BE_API.SING_IN(), {email, password})
            .then(res => {

                if (res.length > 0) {
                    localStorage.setItem('guest', JSON.stringify(res[0]))
                    navigate(backUrl);
                    return;
                }

                alert('User was not found');
            });
    }

    const isGuestLogged = LocalStorage.getGuest();

    if (isGuestLogged) {
        return <div>You already logged!</div>
    }

    return (
        <>
            {/*<Content>*/}
            {/*    <LogoIcon/>*/}
            {/*    <LogoText>{translations.company_name}</LogoText>*/}
            {/*</Content>*/}
            <ContentContainer>
                <Input Icon={MailIcon} placeholder={`Enter email`} value={email}/>
                <Input Icon={LockIcon} placeholder={`Enter password`} type="password" value={password}/>
                <Link to={ROUTER.CHANGE_PASSWORD.URL} primary>{resolveTranslation(["SING_IN_REMAINING_PASS"])}</Link>
                {/*<Flex flexDirection='column'>*/}
                {/*    <Flex justifyContent="space-between">*/}
                {/*        <NavLabel primary={false}>Or login with</NavLabel>*/}
                {/*        <Link to={ROUTER.CHANGE_PASSWORD.URL} primary>Forget password ?</Link>*/}
                {/*    </Flex>*/}
                {/*    <Flex justifyContent="space-between">*/}
                {/*        <SecondaryWithIconButton><FacebookIcon/>facebook</SecondaryWithIconButton>*/}
                {/*        <PrimaryWithIconButton><GoogleIcon/>Google</PrimaryWithIconButton>*/}
                {/*    </Flex>*/}
                {/*</Flex>*/}
                <NavigationLabelHref
                    hrefTitle={resolveTranslation(["SIGN_IN_PAGE.SING_UP_LINK"])}
                    to={`${ROUTER.SING_UP.URL}?backUrl=${backUrl}`}
                    label={resolveTranslation(["SIGN_IN_PAGE.ACCOUNT_CONFIRMATION"])}
                />
            </ContentContainer>
            <PrimaryWideButton onClick={handleSingIn}><span>{resolveTranslation(["SING_IN_MAIN_TITLE"])}</span></PrimaryWideButton>
        </>
    );
};

export default SignInPage;