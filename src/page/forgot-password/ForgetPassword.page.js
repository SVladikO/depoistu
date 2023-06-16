import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {Input, Label, PrimaryButton, ContentContainer, NotificationTDB} from "../../components";
import {ReactComponent as MailIcon} from "../../icons/mail.svg";
import {resolveTranslation, TRANSLATION} from "../../utils/translation";
import {URL} from "../../utils/config";
import validation from "../../utils/validation";


const CheckEmailSchema = Yup.object().shape(validation.customer.forgetPassword);

const ForgetPasswordPage = () => {
    const [wasSubmitted, setWasSubmitted] = useState(false);

    if (wasSubmitted) {
        return (
            <NotificationTDB title="Request was sent!" description="Please check your mail to reset password">
                <Link to={URL.SING_IN}>
                    <PrimaryButton isWide>
                        {resolveTranslation(TRANSLATION.PAGE.FORGOT_PASSWORD.LINK_TO_SIGN_IN_PAGE)}
                    </PrimaryButton>
                </Link>
            </NotificationTDB>
        );
    }

    return (<>
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={CheckEmailSchema}
            onSubmit={value => {
                console.log(value);
                setWasSubmitted(true);
            }}
        >
            {({values, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer>
                        <Label>Email</Label>
                        <Input
                            Icon={MailIcon}
                            name='email'
                            type='email'
                            value={values.email}
                            withCleaner
                            isTouched={wasSubmitted || touched.email}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('email', '')}
                            errorMessage={errors.email}
                        />
                    </ContentContainer>
                    <PrimaryButton type="submit" isWide>
                        {resolveTranslation("PAGE.FORGOT_PASSWORD.BUTTON_SUBMIT")}
                    </PrimaryButton>
                </form>
            )}
        </Formik>
    </>);
};

export default ForgetPasswordPage;