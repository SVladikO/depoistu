import {useState} from "react";
import * as Yup from 'yup';
import {Formik} from "formik";

import {Title, Wrapper} from "./SingUp.style";
import {PrimaryButton, Label, Input, ContentContainer} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";
import validation from '../../utils/validation';


const SignUpSchema = Yup.object().shape(validation.user.singUp);

const SingUpPage = () => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    newPassword: '',
                    confirmedPassword: '',
                    phone: '',
                    // termsAndConditions: true
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
                            <Title>{resolveTranslation("PAGE.SING_UP.CREATE_ACCOUNT")}</Title>
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
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PASS")}</Label>
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
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.CONFIRM_PASS")}</Label>
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
                                hrefTitle={resolveTranslation("PAGE.SING_IN.TOP_TITLE")}
                                to={`${ROUTER.SING_IN.URL}`}
                                label={resolveTranslation("PAGE.SIGN_IN.ACCOUNT_CONFIRMATION")}
                            />
                        </Wrapper>
                        <PrimaryButton type="submit" isWide>{resolveTranslation("PAGE.SING_UP.TOP_TITLE")}</PrimaryButton>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SingUpPage;