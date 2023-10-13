import * as Yup from 'yup';
import {Formik} from "formik";
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {
    Input,
    ContentContainer,
    NavigationLabelHref,
    PrimaryButton,
} from "components";

import {ReactComponent as LockIcon} from "assets/icons/lock.svg";
import {ReactComponent as MailIcon} from "assets/icons/mail.svg";

import validation from 'utils/validation';
import {ROUTER, URL} from 'utils/config';
import {fetchData, BE_API} from "utils/fetch";
import {TRANSLATION, translate} from "utils/translation";
import {LocalStorage, LOCAL_STORAGE_KEY} from "utils/localStorage"
import {publishNotificationEvent} from "utils/event";
import {useDispatch} from "react-redux";
import {addCustomer} from "../../features/customer/customerSlice";

const SignInSchema = Yup.object().shape(validation.customer.singIn);

const signInInitialValues = {
    email: '',
    password: ''
}

const SignInPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleSingIn = ({email, password}) => {
        setIsLoading(true)

        fetchData(BE_API.CUSTOMER.SING_IN(), {email, password})
            .then(res => {
                dispatch(addCustomer(res.body))
                LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res.body)
                navigate(URL.SETTING);
                setIsLoading(false);
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false));
    }

    const onSubmitForm = (values) => {
        handleSingIn(values)
        setWasSubmitted(true);
    }


    return (
        <>
            <Formik
                initialValues={signInInitialValues}
                validationSchema={SignInSchema}
                onSubmit={onSubmitForm}
            >
                {({values, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <ContentContainer noShadow>
                            <Input
                                isRequired
                                withCleaner
                                Icon={MailIcon}
                                name='email'
                                type='email'
                                value={values.email}
                                isTouched={wasSubmitted || touched.email}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('email', '')}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.EMAIL)}
                                errorMessage={errors.email}
                            />
                            <Input
                                isRequired
                                withSwitcher
                                Icon={LockIcon}
                                name='password'
                                isTouched={wasSubmitted || touched.password}
                                value={values.password}
                                changeHandler={handleChange}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PASSWORD)}
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
                            withPadding
                        >
                            {translate(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE)}
                        </PrimaryButton>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SignInPage;