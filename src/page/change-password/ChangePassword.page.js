import React, {useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import {
    Input,
    RowSplitter,
    ContentContainer, PrimaryButton,
} from "components";

import validation from "utils/validation";
import {BE_API, fetchData} from "utils/fetch";
import {useRedirectToSettingPage} from "utils/hook";
import {TRANSLATION, translate} from 'utils/translation';
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";

const ChangePassWordSchema = Yup.object().shape(validation.customer.changePassword);

const ChangePasswordPage = () => {
    useRedirectToSettingPage();
    const [isLoading, setIsLoading] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const onSubmit = values => {
        setWasSubmitted(true);
        setIsLoading(true)
        const {newPassword} = values;
        const {PASSWORD, EMAIL} = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER);
        const reqObj = {newPassword, password: PASSWORD, email: EMAIL};

        fetchData(BE_API.CUSTOMER.CHANGE_PASSWORD(), reqObj)
            .then(res => {
                LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER, res.body);
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.CUSTOMER.UPDATED_PASSWORD))
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <Formik
                initialValues={{
                    oldPassword: '',
                    newPassword: '',
                    confirmedPassword: ''
                }}
                validationSchema={ChangePassWordSchema}
                onSubmit={onSubmit}
            >
                {({values, handleBlur, touched, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <ContentContainer>
                            <Input
                                withSwitcher
                                value={values.oldPassword}
                                onBlur={handleBlur}
                                name="oldPassword"
                                changeHandler={handleChange}
                                labelName={translate(TRANSLATION.PAGE.CHANGE_PASSWORD.LABEL.OLD_PASSWORD)}
                                isTouched={wasSubmitted || touched.oldPassword}
                                errorMessage={errors.oldPassword}
                            />
                            <RowSplitter height='10px'/>
                            <Input
                                withSwitcher
                                name="newPassword"
                                value={values.newPassword}
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.newPassword}
                                changeHandler={handleChange}
                                labelName={translate(TRANSLATION.PAGE.CHANGE_PASSWORD.LABEL.NEW_PASSWORD)}
                                errorMessage={errors.newPassword}
                            />
                            <Input
                                withSwitcher
                                name="confirmedPassword"
                                value={values.confirmedPassword}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                labelName={translate(TRANSLATION.PAGE.CHANGE_PASSWORD.LABEL.CONFIRM_PASSWORD)}
                                isTouched={wasSubmitted || touched.confirmedPassword}
                                errorMessage={errors.confirmedPassword}
                            />
                            <RowSplitter margin="20px 0 0"/>
                            <PrimaryButton
                                isWide
                                type="submit"
                                isLoading={isLoading}
                            >
                                {translate(TRANSLATION.PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD)}
                            </PrimaryButton>
                        </ContentContainer>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ChangePasswordPage;
