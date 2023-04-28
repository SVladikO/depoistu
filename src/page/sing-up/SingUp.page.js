import * as Yup from 'yup';
import {Formik} from "formik";

import {Title,Container,Wrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryButton, Label, Input} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";




const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(30, "Too Long!")
        .required("Name is required"),
    password: Yup.string()
        .min(6, 'Too Short! Min length 6')
        .max(12, 'Too Long! Max length 12')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .max(30, 'Too Long! Max length 30')
        .required('Required'),
    phone: Yup.string()
        .min(12, 'Example: 380971234567')
        .max(12, 'Example: 380971234567')
        .required("Phone number is required"),
    newPassword: Yup.string()
        .max(30, 'Too Long! Max length 30')
        .required('Required'),
    confirmedPassword: Yup.string()
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.newPassword === value
        }),
    termsAndConditions: Yup.bool()
        .oneOf([true], 'You need to accept the terms and conditions'),
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
                    termsAndConditions: true
                }}
                validationSchema={SignUpSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({values, handleSubmit, handleChange, errors, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <Container>
                            <Title>{resolveTranslation("PAGE.SING_UP.CREATE_ACCOUNT")}</Title>
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.USER_NAME")}</Label>
                            <Input
                                withCleaner
                                name="name"
                                value={values.name}
                                changeHandler={handleChange}
                            />
                            {errors.name && touched.name && <div>{errors.name}</div>}
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PHONE")}</Label>
                            <Input
                                withCleaner
                                name="phone"
                                value={values.phone}
                                changeHandler={handleChange}
                            />
                            {errors.phone && touched.phone && <div>{errors.phone}</div>}
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.EMAIL")}</Label>
                            <Input
                                withCleaner
                                type="email"
                                name="email"
                                value={values.email}
                                changeHandler={handleChange}
                            />
                            {errors.email && touched.email && <div>{errors.email}</div>}
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.PASS")}</Label>
                            <Input
                                withSwitcher
                                name="newPassword"
                                type={newPasswordType}
                                value={values.newPassword}
                                changeHandler={handleChange}
                                switchHandler={newPasswordSwitchHandler}
                            />
                            {errors.newPassword && touched.newPassword && <div>{errors.newPassword}</div>}
                            <Label>{resolveTranslation("PAGE.SING_UP.LABEL.CONFIRM_PASS")}</Label>
                            <Input
                                withSwitcher
                                type={confirmedPasswordType}
                                value={values.confirmedPassword}
                                name="confirmedPassword"
                                changeHandler={handleChange}
                                switchHandler={confirmedPasswordSwitchHandler}
                            />
                            {errors.confirmedPassword && touched.confirmedPassword && <div>{errors.confirmedPassword}</div>}
                            <CheckBoxWithLabel type="checkbox" name="termsAndConditions" label={resolveTranslation("PAGE.SING_UP.CHECKBOX_CONFIRM_TERMS")}/>
                            {errors.termsAndConditions && touched.termsAndConditions && <div>{errors.termsAndConditions}</div>}
                        </Container>
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