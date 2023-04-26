import {Title,Container,Wrapper} from "./SingUp.style";
import {CheckBoxWithLabel, PrimaryButton, Label, Input} from "../../components";
import NavigationLabelHref from "../../components/NavigationLabelHref/NavigationLabelHref";
import {ROUTER} from '../../utils/config';
import {resolveTranslation} from "../../utils/utils";
import {useCallback, useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import {bool} from "yup";




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
    phoneNumber: Yup.string()
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Invalid phone number"
        )
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
    const [name, setName] = useState('');
    const nameChangeHandler = useCallback(setName, [name]);
    const nameClearHandler = useCallback(() => setName(''), [name]);

    const [phone, setPhone] = useState('');
    const phoneChangeHandler = useCallback(setPhone, [phone]);
    const phoneClearHandler = useCallback(() => setPhone(''), [phone]);

    const [email, setEmail] = useState('');
    const emailChangeHandler = useCallback(setEmail, [email]);
    const emailClearHandler = useCallback(() => setEmail(''), [email]);

    const [newPassword, setNewPassword] = useState('');
    const newPasswordChangeHandler = useCallback(setNewPassword, [newPassword]);

    const [newPasswordType, setNewPasswordType] = useState('password');
    const newPasswordSwitchHandler = useCallback(() => setNewPasswordType(newPasswordType === 'password' ? 'text' : 'password'), [newPasswordType]);

    const [confirmedPassword, setConfirmedPassword] = useState('');
    const confirmedPasswordChangeHandler = useCallback(setConfirmedPassword, [confirmedPassword]);

    const [confirmedPasswordType, setConfirmedPasswordType] = useState('password');
    const confirmedPasswordSwitchHandler = useCallback(() => setConfirmedPasswordType(confirmedPasswordType === 'password' ? 'text' : 'password'), [confirmedPasswordType]);

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    newPassword: '',
                    confirmedPassword: '',
                    phoneNumber: '',
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
                                name="phoneNumber"
                                value={values.phoneNumber}
                                changeHandler={handleChange}
                            />
                            {errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}
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