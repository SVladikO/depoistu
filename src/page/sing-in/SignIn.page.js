import * as Yup from 'yup';
import {Formik} from "formik";
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

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
import validation  from '../../utils/validation';
import {getParam, LocalStorage, resolveTranslation, LOCAL_STORAGE_KEY} from "../../utils/utils";

const SignInSchema = Yup.object().shape(validation.user.singIn);

const SignInPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const backUrl = getParam(`backUrl`) || URL.SETTING;
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [requestError, setRequestError] = useState('');
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const handleSingIn = ({email, password}) => {
        dispatch(startLoading());

        fetchData(BE_API.SING_IN(), {email, password})
            .then(res => {
                LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res.body)
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
                setWasSubmitted(true);
            }}
        >
            {({values,touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer>
                        <Label>Email</Label>
                        <Input
                            Icon={MailIcon}
                            name='email'
                            type='email'
                            value={values.email}
                            withCleaner
                            isTouched={wasSubmitted || touched.email}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('email', '')}
                            errorMessage={errors.email}
                        />
                        <Label>Password</Label>
                        <Input
                            Icon={LockIcon}
                            name='password'
                            isTouched={wasSubmitted || touched.password}
                            value={values.password}
                            changeHandler={handleChange}
                            withSwitcher
                            errorMessage={errors.password}
                        />
                        <Link to={'/'}>{resolveTranslation("PAGE.SING_IN.FORGOT_PASSWORD")}</Link>
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