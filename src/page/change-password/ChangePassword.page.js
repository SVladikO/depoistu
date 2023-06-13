import {Formik} from "formik";
import * as Yup from 'yup';

import {
    Label,
    Input,
    RowSplitter,
    PrimaryButton,
    ContentContainer, Notification,
} from "../../components";

import {resolveTranslation} from "../../utils/utils";
import validation from "../../utils/validation";
import React, {useState} from "react";
import {BE_API, fetchData} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

const ChangePassWordSchema = Yup.object().shape(validation.customer.changePassword);

const ChangePasswordPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
    const [requestError, setRequestError] = useState('');
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
                setIsPasswordUpdated(true);
            })
            .catch(e => setRequestError(e.body.message))
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return <Notification.Loading/>
    }

    if (isPasswordUpdated) {
        return <Notification.Success message={"Password was updated."} />
    }

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
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
                            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.OLD_PASSWORD")}</Label>
                            <Input
                                withSwitcher
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.oldPassword}
                                name="oldPassword"
                                value={values.oldPassword}
                                changeHandler={handleChange}
                                errorMessage={errors.oldPassword}
                            />
                            <RowSplitter height='10px'/>
                            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.NEW_PASSWORD")}</Label>
                            <Input
                                withSwitcher
                                name="newPassword"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.newPassword}
                                value={values.newPassword}
                                changeHandler={handleChange}
                                errorMessage={errors.newPassword}
                            />
                            <Label>{resolveTranslation("PAGE.CHANGE_PASSWORD.LABEL.CONFIRM_PASSWORD")}</Label>
                            <Input
                                withSwitcher
                                name="confirmedPassword"
                                nBlur={handleBlur}
                                isTouched={wasSubmitted || touched.confirmedPassword}
                                value={values.confirmedPassword}
                                changeHandler={handleChange}
                                errorMessage={errors.confirmedPassword}
                            />
                            <RowSplitter margin="20px 0 0"/>
                            <PrimaryButton type="submit"
                                           isWide>{resolveTranslation("PAGE.CHANGE_PASSWORD.BUTTON.SAVE_PASSWORD")}</PrimaryButton>
                        </ContentContainer>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ChangePasswordPage;
