import {Formik} from "formik";
import * as Yup from 'yup';

import {
    Label,
    Input,
    RowSplitter,
    PrimaryButton,
    ContentContainer,
} from "../../components";

import {resolveTranslation} from "../../utils/utils";
import validation from "../../utils/validation";
import {useState} from "react";

const ChangePassWordSchema = Yup.object().shape(validation.customer.changePassword);

const ChangePasswordPage = () => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    return (
        <Formik
            initialValues={{
                oldPassword: '',
                newPassword: '',
                confirmedPassword: ''
            }}
            validationSchema={ChangePassWordSchema}
            onSubmit={values => {
                console.log(values);
                setWasSubmitted(true);
            }}
        >
            {( {values, handleBlur, touched, handleSubmit, handleChange, errors}) => (
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

    );
};

export default ChangePasswordPage;
