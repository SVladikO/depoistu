import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import * as Yup from 'yup';
import {Formik} from "formik";
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
import {publishNotificationEvent} from "utils/event";
import {addCustomer} from "features/customer/customerSlice";
import {useQuery} from "../../utils/hook";

const SignInSchema = Yup.object().shape(validation.customer.singIn);

const signInInitialValues = {
    email: '',
    password: ''
}

const SignInPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let query = useQuery()
    const backUrl = query.get("backUrl") || URL.SETTING;
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleSingIn = ({email, password}) => {
        setIsLoading(true)

        fetchData(BE_API.CUSTOMER.SING_IN(), {email, password})
            .then(res => {
                dispatch(addCustomer(res.body))
                navigate(backUrl);
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
                            {/*TODO: Add forget password link after we start to send email from BE. */}
                            {/*<Link to={URL.FORGOT_PASSWORD}>{translate(TRANSLATION.PAGE.SIGN_IN.FORGOT_PASSWORD)}</Link>*/}

                        </ContentContainer>
                        <PrimaryButton
                            isWide
                            type="submit"
                            isLoading={isLoading}
                            withPadding
                        >
                            {translate(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE)}
                        </PrimaryButton>
                        <NavigationLabelHref
                            hrefTitle={translate(TRANSLATION.PAGE.SIGN_IN.SING_UP_LINK)}
                            to={ROUTER.SING_UP.URL}
                            label={translate(TRANSLATION.PAGE.SIGN_IN.ACCOUNT_CONFIRMATION)}
                        />
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SignInPage;