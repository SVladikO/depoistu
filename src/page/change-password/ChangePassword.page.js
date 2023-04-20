import React, {useCallback, useState} from 'react';
import {Formik} from "formik";
import * as Yup from 'yup';
import {
    ContentContainer,
    Input,
    RowSplitter,
    PrimaryButton
} from "../../components";
import {resolveTranslation} from "../../utils/utils";
import {Label} from "../../components";


const ChangePassWordSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(6, 'Too Short! Min length 6')
        .max(12, 'Too Long! Max length 12')
        .required('Required'),
    newPassword: Yup.string()
        .max(30, 'Too Long! Max length 30')
        .required('Required'),
    confirmedPassword: Yup.string()
        .test('passwords-match', 'Passwords must match', function(value){
            return this.parent.newPassword === value
        })
});

const ChangePasswordPage = () => {
    const [currentPasswordType, setCurrentPasswordType] = useState('password');
    const [newPasswordType, setNewPasswordType] = useState('password');
    const [confirmedPasswordType, setConfirmedPasswordType] = useState('password');

    const currenPasswordSwitchHandler = useCallback(() => setCurrentPasswordType(currentPasswordType === 'password' ? 'text' : 'password'), [currentPasswordType]);
    const newPasswordSwitchHandler = useCallback(() => setNewPasswordType(newPasswordType === 'password' ? 'text' : 'password'), [newPasswordType]);
    const confirmedPasswordSwitchHandler = useCallback(() => setConfirmedPasswordType(confirmedPasswordType === 'password' ? 'text' : 'password'), [confirmedPasswordType]);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const currenPasswordChangeHandler = useCallback((e) => setCurrentPassword(e.target.value), [currentPassword]);
    const newPasswordChangeHandler = useCallback(setNewPassword, [newPassword]);
    const confirmedPasswordChangeHandler = useCallback(setConfirmedPassword, [confirmedPassword]);

    return (
        <Formik
            initialValues={{
                currentPassword: '',
                newPassword: '',
                confirmedPassword: ''
            }}
            validationSchema={ChangePassWordSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({values, handleSubmit,handleChange, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer>
                        <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.OLD_PASSWORD")}</Label>
                        <Input
                            withSwitcher
                            name="currentPassword"
                            type={currentPasswordType}
                            //value={currentPassword}
                            value={values.currentPassword}
                            changeHandler={handleChange}
                            switchHandler={currenPasswordSwitchHandler}
                        />
                        {errors.currentPassword && touched.currentPassword ? <div>{errors.currentPassword}</div> : null}
                        <RowSplitter height='10px'/>
                        <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.NEW_PASSWORD")}</Label>
                        <Input
                            withSwitcher
                            name="newPassword"
                            type={newPasswordType}
                            //value={newPassword}
                            value={values.newPassword}
                            changeHandler={handleChange}
                            switchHandler={newPasswordSwitchHandler}
                        />
                        {errors.newPassword && touched.newPassword ? <div>{errors.newPassword}</div> : null}
                        <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.CONFIRM_PASSWORD")}</Label>
                        <Input
                            withSwitcher
                            name="confirmedPassword"
                            type={confirmedPasswordType}
                            //value={confirmedPassword}
                            value={values.confirmedPassword}
                            changeHandler={handleChange}
                            switchHandler={confirmedPasswordSwitchHandler}
                        />
                        {errors.confirmedPassword && touched.confirmedPassword ? <div>{errors.confirmedPassword}</div> : null}
                        <RowSplitter margin="20px 0 0"/>
                        <PrimaryButton type="submit" isWide>{resolveTranslation("PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD")}</PrimaryButton>
                    </ContentContainer>
                </form>)}
        </Formik>

    );
};

export default ChangePasswordPage;
