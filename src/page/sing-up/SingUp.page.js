import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import {Formik} from "formik";

import {Wrapper} from "./SingUp.style";
import {Label, Input, ContentContainer, PrimaryButton} from "components";
import NavigationLabelHref from "components/NavigationLabelHref/NavigationLabelHref";

import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import validation from 'utils/validation';
import {BE_API, fetchData} from "utils/fetch";
import {TRANSLATION, translate} from "utils/translation";
import {ROUTER, URL} from 'utils/config';
import {publishNotificationEvent} from "utils/event";

const SignUpSchema = Yup.object().shape(validation.customer.singUp);

const SingUpPage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const onSubmit = ({name, email, newPassword, phone}) => {
        setWasSubmitted(true);
        setIsLoading(true);

        fetchData(BE_API.CUSTOMER.SING_UP(), {name, email, password: newPassword, phone})
            .then(res => {
                LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res.body)
                navigate(URL.SETTING);
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    newPassword: '',
                    confirmedPassword: '',
                }}
                validationSchema={SignUpSchema}
                onSubmit={onSubmit}
            >
                {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <ContentContainer>
                            <Label>{translate(TRANSLATION.INPUT_LABEL.CUSTOMER.NAME)}</Label>
                            <Input
                                withCleaner
                                isTouched={wasSubmitted || touched.name}
                                name="name"
                                onBlur={handleBlur}
                                value={values.name}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                errorMessage={errors.name}
                            />
                            <Label>{translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PHONE)}</Label>
                            <Input
                                withCleaner
                                name="phone"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.phone}
                                value={values.phone}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('phone', '')}
                                errorMessage={errors.phone}
                            />
                            <Label>{translate(TRANSLATION.INPUT_LABEL.CUSTOMER.EMAIL)}</Label>
                            <Input
                                withCleaner
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.email}
                                value={values.email}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('email', '')}
                                errorMessage={errors.email}
                            />
                            <Label>{translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PASSWORD)}</Label>
                            <Input
                                withSwitcher
                                name="newPassword"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.newPassword}
                                value={values.newPassword}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('newPassword', '')}
                                errorMessage={errors.newPassword}
                            />
                            <Label>{translate(TRANSLATION.INPUT_LABEL.CUSTOMER.CONFIRM_PASSWORD)}</Label>
                            <Input
                                withSwitcher
                                value={values.confirmedPassword}
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.confirmedPassword}
                                name="confirmedPassword"
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('confirmedPassword', '')}
                                errorMessage={errors.confirmedPassword}
                            />
                        </ContentContainer>
                        <Wrapper>
                            <NavigationLabelHref
                                hrefTitle={translate(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE)}
                                to={`${ROUTER.SING_IN.URL}`}
                                label={translate(TRANSLATION.PAGE.SIGN_IN.ACCOUNT_CONFIRMATION)}
                            />
                        </Wrapper>
                        <PrimaryButton
                            isWide
                            type="submit"
                            isLoading={isLoading}
                        >
                            {translate(TRANSLATION.PAGE.SING_UP.TOP_TITLE)}
                        </PrimaryButton>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SingUpPage;