import * as Yup from 'yup';
import {Formik} from "formik";

import {Title, Wrapper} from "./SingUp.style";
import {PrimaryButton, Label, Input, ContentContainer} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";
import {user_validation} from "../../utils/validation";

const SignUpSchema = Yup.object().shape({
    name: user_validation.name,
    password: user_validation.password,
    email: user_validation.email,
    phone: user_validation.phone,
    newPassword: user_validation.password,
    confirmedPassword: user_validation.confirmedPassword,
});

const SingUpPage = () => {
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
                }}
            >
                {({values, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <ContentContainer>
                            <Title>{resolveTranslation("PAGE.SING_UP.CREATE_ACCOUNT")}</Title>
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.USER_NAME")}</Label>
                            <Input
                                withCleaner
                                name="name"
                                value={values.name}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                errorMessage={errors.name}
                            />
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PHONE")}</Label>
                            <Input
                                withCleaner
                                name="phone"
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
                                value={values.email}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('email', '')}
                                errorMessage={errors.email}
                            />
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PASS")}</Label>
                            <Input
                                withSwitcher
                                name="newPassword"
                                value={values.newPassword}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('newPassword', '')}
                                errorMessage={errors.newPassword}
                            />
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.CONFIRM_PASS")}</Label>
                            <Input
                                withSwitcher
                                value={values.confirmedPassword}
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