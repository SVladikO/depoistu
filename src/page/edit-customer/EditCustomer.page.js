import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {PrimaryButton, Label, Input, ContentContainer} from "../../components";

import validation from "../../utils/validation";
import {TRANSLATION, translate} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

const SignUpSchema = Yup.object().shape(validation.customer.singUp);

const EditCustomerPage = () => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const customer = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER);

    return (
        <>
            <Formik
                initialValues={{
                    name: customer.NAME,
                    phone: customer.PHONE,
                    email: customer.EMAIL,
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
                            <Label>{translate(TRANSLATION.PAGE.SING_UP.LABEL.USER_NAME)}</Label>
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
                            <Label>{translate(TRANSLATION.PAGE.SING_UP.LABEL.PHONE)}</Label>
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
                            <Label>{translate(TRANSLATION.PAGE.SING_UP.LABEL.EMAIL)}</Label>
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
                        </ContentContainer>
                        <PrimaryButton type="submit" isWide>{translate(TRANSLATION.PAGE.CHANGE_PASSWORD.BUTTON.SAVE_CHANGES)}</PrimaryButton>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default EditCustomerPage;