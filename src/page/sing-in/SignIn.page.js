import React, {useState} from 'react';

// import {
//     Content,
//     LogoText,
//     NavLabel
// } from "./SignIn.style";

import {
    Input,
    PrimaryButton,
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
import {resolveTranslation, LOCAL_STORAGE_KEY} from "../../utils/utils";


const SignInPage = () => {
    const [email, setEmail] = useState('vlad_S@gmail.com')
    const [password, setPassword] = useState('vv11vv')
    const navigate = useNavigate();
    const backUrl = getParam(`backUrl`);
    const handleSingIn = () => {

        fetchData(BE_API.SING_IN(), {email, password})
            .then(res => {
                if (res.length > 0) {
                    LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res[0])
                    navigate(backUrl);
                    return;
                }

                alert('User was not found');
            });
    }

    const isGuestLogged = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER);

    if (isGuestLogged) {
        return <div>{resolveTranslation("PAGE.SING_IN.USER_NOTIFICATION")}</div>
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
                <Link to={ROUTER.CHANGE_PASSWORD.URL}
                      primary>{resolveTranslation("PAGE.SING_IN.FORGOT_PASSWORD")}</Link>
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
                    hrefTitle={resolveTranslation("PAGE.SIGN_IN.SING_UP_LINK")}
                    to={`${ROUTER.SING_UP.URL}?backUrl=${backUrl}`}
                    label={resolveTranslation("PAGE.SIGN_IN.ACCOUNT_CONFIRMATION")}
                />
            </ContentContainer>
            <PrimaryButton
                onClick={handleSingIn}><span>{resolveTranslation("PAGE.SING_IN.TOP_TITLE")}</span></PrimaryButton>
        </>
    );
};

export default SignInPage;