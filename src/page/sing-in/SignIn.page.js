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
    ContentContainer, NavigationLabelHref,
    Notification,
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
import {BE_API, ROUTER, URL} from '../../utils/config';
import {resolveTranslation, LOCAL_STORAGE_KEY} from "../../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {startLoading, stopLoading} from "../../features/request/requestSlice";

const SignInPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const backUrl = getParam(`backUrl`) || URL.SETTING;
    const isLoading = useSelector(state => state.request.value.isLoading);

    const [password, setPassword] = useState('vv11vv')
    const [email, setEmail] = useState('vlad_S@gmail.com')
    const [requestError, setRequestError] = useState('');
    const handleSingIn = () => {
        dispatch(startLoading());

        fetchData(BE_API.SING_IN(), {email, password})
            .then(res => {
                LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res)
                setTimeout(() => {
                    dispatch(stopLoading())
                    navigate(backUrl)
                }, 1000)

            })
            .catch(e => {
                setRequestError(e.toString())
                setTimeout(() => dispatch(stopLoading()), 1000)
            });
    }

    if (isLoading) {
        return <Notification.Loading />
    }

    return (<>
        {/*<Content>*/}
        {/*    <LogoIcon/>*/}
        {/*    <LogoText>{translations.company_name}</LogoText>*/}
        {/*</Content>*/}
        {requestError && <Notification.Error message={requestError} />}
        <ContentContainer>
            <Input Icon={MailIcon} value={email} onChange={e => setEmail(e.target.value)} placeholder={`Enter email`} />
            <Input Icon={LockIcon} value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder={`Enter password`} />
            <Link to={ROUTER.CHANGE_PASSWORD.URL}>{resolveTranslation("PAGE.SING_IN.FORGOT_PASSWORD")}</Link>
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
        <PrimaryButton onClick={handleSingIn}>
            {resolveTranslation("PAGE.SING_IN.TOP_TITLE")}
        </PrimaryButton>
    </>);
};

export default SignInPage;