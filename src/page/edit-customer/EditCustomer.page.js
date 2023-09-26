import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Input, ContentContainer, PrimaryButton} from "components";

import validation from "utils/validation";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {TRANSLATION, translate} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";

const SignUpSchema = Yup.object().shape(validation.customer.singUp);

const EditCustomerPage = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const customer = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER) || {};

    return (
        <>
            <Formik
                initialValues={{
                    name: customer.name,
                    phone: customer.phone,
                    email: customer.email,
                }}
                validationSchema={SignUpSchema}
                onSubmit={values => {
                    console.log(values);
                    setWasSubmitted(true);
                }}
            >
                {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <ContentContainer>
                            <Input
                                withCleaner
                                isTouched={wasSubmitted || touched.name}
                                name="name"
                                onBlur={handleBlur}
                                value={values.name}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.NAME)}
                                errorMessage={errors.name}
                            />
                            <Input
                                withCleaner
                                name="phone"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.phone}
                                value={values.phone}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('phone', '')}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PHONE)}
                                errorMessage={errors.phone}
                            />
                            <Input
                                withCleaner
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.email}
                                value={values.email}
                                changeHandler={handleChange}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.EMAIL)}
                                clearHandler={() => setFieldValue('email', '')}
                                errorMessage={errors.email}
                            />
                        <PrimaryButton type="submit" isWide>
                            {translate(TRANSLATION.PAGE.CHANGE_PASSWORD.BUTTON.SAVE_CHANGES)}
                        </PrimaryButton>
                        </ContentContainer>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default EditCustomerPage;