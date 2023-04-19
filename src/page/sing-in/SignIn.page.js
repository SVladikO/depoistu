import React, {useCallback, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as Yup from 'yup';

import {
    Input,
    PrimaryButton,
    ContentContainer,
    Label,
    NavigationLabelHref,
    Notification,
} from "../../components";

import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";


import {startLoading, stopLoading} from "../../features/request/requestSlice";

import {fetchData} from "../../utils/fetch";
import {BE_API, ROUTER, URL} from '../../utils/config';
import {getParam, LocalStorage, resolveTranslation, LOCAL_STORAGE_KEY} from "../../utils/utils";

const SignInSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short! Min length 6')
        .max(20, 'Too Long! Max length 20')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const SignInPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const backUrl = getParam(`backUrl`) || URL.SETTING;
    const isLoading = useSelector(state => state.request.value.isLoading);

    const [passwordType, setPasswordType] = useState('password')
    const [requestError, setRequestError] = useState('');

    const handleSingIn = ({email, password}) => {
        dispatch(startLoading());

        fetchData(BE_API.SING_IN(), {email, password})
            .then(res => {
                LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res)
                setTimeout(() => {
                    dispatch(stopLoading())
                }, 1000)

                navigate(backUrl);

            })
            .catch(e => {
                setRequestError(e.toString())
                setTimeout(() => dispatch(stopLoading()), 1000)
            });
    }

    const passwordSwitchHandler = useCallback(() => setPasswordType(passwordType === 'password' ? 'text' : 'password'), [passwordType])

    if (isLoading) {
        return <Notification.Loading/>
    }

    return (<>
        {requestError && <Notification.Error message={requestError}/>}
        <Formik
            initialValues={{
                email: 'vlad_S@gmail.com',
                password: 'vv11vv'
            }}
            validationSchema={SignInSchema}
            onSubmit={values => {
                console.log(values);
                handleSingIn(values)
            }}
        >
            {({values, handleSubmit, handleChange, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer>
                        <Label>Email</Label>
                        <Input
                            Icon={MailIcon}
                            name='email'
                            value={values.email}
                            withCleaner
                            changeHandler={handleChange}
                        />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Label>Password</Label>
                        <Input
                            Icon={LockIcon}
                            name='password'
                            type={passwordType}
                            value={values.password}
                            changeHandler={handleChange}
                            switchHandler={passwordSwitchHandler}
                            withSwitcher
                        />
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        <Link>{resolveTranslation("PAGE.SING_IN.FORGOT_PASSWORD")}</Link>
                        <NavigationLabelHref
                            hrefTitle={resolveTranslation("PAGE.SIGN_IN.SING_UP_LINK")}
                            to={`${ROUTER.SING_UP.URL}?backUrl=${backUrl}`}
                            label={resolveTranslation("PAGE.SIGN_IN.ACCOUNT_CONFIRMATION")}
                        />
                    </ContentContainer>
                    <PrimaryButton type="submit" isWide>
                        {resolveTranslation("PAGE.SING_IN.TOP_TITLE")}
                    </PrimaryButton>
                </form>
            )
            }
        </Formik>
    </>);
};

export default SignInPage;