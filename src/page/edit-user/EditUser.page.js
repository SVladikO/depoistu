import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import validation from "../../utils/validation";
import {PrimaryButton, Label, Input, ContentContainer} from "../../components";
import {resolveTranslation} from "../../utils/utils";

const SignUpSchema = Yup.object().shape(validation.user.singUp);

const EditUserPage = () => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
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
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.USER_NAME")}</Label>
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
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PHONE")}</Label>
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
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.EMAIL")}</Label>
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
                        <PrimaryButton type="submit" isWide>{resolveTranslation("PAGE.CHANGE_PASSWORD.BUTTON.SAVE_CHANGES")}</PrimaryButton>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default EditUserPage;