import * as Yup from 'yup';
import {Formik} from "formik";
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {
    Input,
    PrimaryButton,
    ContentContainer,
    Label,
    NavigationLabelHref,
    Notification,
    LoadingButton,
} from "../../components";

import {ReactComponent as LockIcon} from "../../icons/lock.svg";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";
import {ReactComponent as LoadingIcon} from "../../icons/loading.svg";

import validation from '../../utils/validation';
import {ROUTER, URL} from '../../utils/config';
import {fetchData, BE_API} from "../../utils/fetch";
import {TRANSLATION, translate} from "../../utils/translation";
import {LocalStorage, LOCAL_STORAGE_KEY} from "../../utils/localStorage"

const SignInSchema = Yup.object().shape(validation.customer.singIn);

const signInInitialValues = {
    email: '',
    password: ''
}

const SignInPage = () => {
    const navigate = useNavigate();
    const [requestError, setRequestError] = useState('');
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleSingIn = ({email, password}) => {
        setIsLoading(true)

        fetchData(BE_API.CUSTOMER.SING_IN(), {email, password})
            .then(res => {
                setTimeout(() => {
                    LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res.body)
                    navigate(URL.SETTING);
                    setIsLoading(false);
                }, 3000)
            })
            .catch(e => {
                setIsLoading(false);
                setRequestError(e.body.message);
            })
    }

    const onSubmitForm = (values) => {
        handleSingIn(values)
        setWasSubmitted(true);
    }

    if (requestError) {
        return (
            <Notification.Error message={requestError}/>
        )
    }

    return (
        <Formik
            initialValues={signInInitialValues}
            validationSchema={SignInSchema}
            onSubmit={onSubmitForm}
        >
            {({values, touched, setFieldValue, handleSubmit, handleChange, errors, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer>
                        <Label>{translate(TRANSLATION.INPUT_LABEL.CUSTOMER.EMAIL)}</Label>
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
                        <Label>{translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PASSWORD)}</Label>
                        <Input
                            Icon={LockIcon}
                            name='password'
                            isTouched={wasSubmitted || touched.password}
                            value={values.password}
                            changeHandler={handleChange}
                            withSwitcher
                            errorMessage={errors.password}
                        />
                        <Link to={URL.FORGOT_PASSWORD}>{translate(TRANSLATION.PAGE.SIGN_IN.FORGOT_PASSWORD)}</Link>
                        <NavigationLabelHref
                            hrefTitle={translate(TRANSLATION.PAGE.SIGN_IN.SING_UP_LINK)}
                            to={ROUTER.SING_UP.URL}
                            label={translate(TRANSLATION.PAGE.SIGN_IN.ACCOUNT_CONFIRMATION)}
                        />
                    </ContentContainer>
                    <PrimaryButton
                        isWide
                        type="submit"
                        isLoading={isLoading}
                    >
                        {translate(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE)}
                    </PrimaryButton>
                </form>
            )}
        </Formik>
    );
};

export default SignInPage;