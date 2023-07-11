import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import {Formik} from "formik";

import {Title, Wrapper} from "./SingUp.style";
import {PrimaryButton, Label, Input, ContentContainer, Notification} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";

import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import validation from '../../utils/validation';
import {BE_API, fetchData} from "../../utils/fetch";
import {TRANSLATION, resolveTranslation} from "../../utils/translation";
import {ROUTER, URL} from '../../utils/config';
import {useScrollUp} from "../../utils/hook";

const SignUpSchema = Yup.object().shape(validation.customer.singUp);

const SingUpPage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState('');
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const onSubmit = ({name, email, newPassword, phone}) => {
        setWasSubmitted(true);
        setIsLoading(true);

        fetchData(BE_API.CUSTOMER.SING_UP(), {name, email, password: newPassword, phone})
            .then(res => {
                LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res.body)
                navigate(URL.SETTING);
            })
            .catch(e => setRequestError(e.body.message))
            .finally(() => setIsLoading(false));
    }

    useScrollUp();

    if (isLoading) {
        return <Notification.Loading/>
    }

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
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
                            <Title>{resolveTranslation(TRANSLATION.PAGE.SING_UP.CREATE_ACCOUNT)}</Title>
                            <Label>{resolveTranslation(TRANSLATION.PAGE.SING_UP.LABEL.USER_NAME)}</Label>
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
                            <Label>{resolveTranslation(TRANSLATION.PAGE.SING_UP.LABEL.PHONE)}</Label>
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
                            <Label>{resolveTranslation(TRANSLATION.PAGE.SING_UP.LABEL.EMAIL)}</Label>
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
                            <Label>{resolveTranslation(TRANSLATION.PAGE.SING_UP.LABEL.PASSWORD)}</Label>
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
                            <Label>{resolveTranslation(TRANSLATION.PAGE.SING_UP.LABEL.CONFIRM_PASSWORD)}</Label>
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
                                hrefTitle={resolveTranslation(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE)}
                                to={`${ROUTER.SING_IN.URL}`}
                                label={resolveTranslation(TRANSLATION.PAGE.SIGN_IN.ACCOUNT_CONFIRMATION)}
                            />
                        </Wrapper>
                        <PrimaryButton type="submit"
                                       isWide>{resolveTranslation(TRANSLATION.PAGE.SING_UP.TOP_TITLE)}</PrimaryButton>
                    </form>
                )}
            </Formik>
        </>
        );
        };

        export default SingUpPage;