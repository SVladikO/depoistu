import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import {Formik} from "formik";

import {Wrapper} from "./SingUp.style";
import {Input, ContentContainer, PrimaryButton, Checkbox} from "components";
import NavigationLabelHref from "components/NavigationLabelHref/NavigationLabelHref";

import validation from 'utils/validation';
import {BE_API, fetchData} from "utils/fetch";
import {TRANSLATION, translate} from "utils/translation";
import {ROUTER, URL} from 'utils/config';
import {publishNotificationEvent} from "utils/event";
import {addCustomer} from "features/customer/customerSlice";
import {useDispatch} from "react-redux";
import {useQuery} from "../../utils/hook";

const SignUpSchema = Yup.object().shape(validation.customer.singUp);

const SingUpPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let query = useQuery()
    const backUrl = query.get("backUrl") || URL.SETTING;
    const [isLoading, setIsLoading] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const onSubmit = ({name, email, newPassword, phone, isBusinessOwner}) => {
        setWasSubmitted(true);
        setIsLoading(true);

        fetchData(BE_API.CUSTOMER.SING_UP(), {
            name,
            email: email.toLowerCase(),
            password: newPassword,
            phone,
            isBusinessOwner
        })
            .then(res => {
                dispatch(addCustomer(res.body));
                navigate(backUrl);
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    newPassword: '',
                    confirmedPassword: '',
                    isBusinessOwner: false,
                }}
                validationSchema={SignUpSchema}
                onSubmit={onSubmit}
            >
                {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <ContentContainer noShadow>
                            <Input
                                withCleaner
                                isTouched={wasSubmitted || touched.name}
                                name="name"
                                onBlur={handleBlur}
                                value={values.name}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.NAME)}
                                errorMessage={errors.name}
                            />
                            <Input
                                withCleaner
                                name="phone"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.phone}
                                value={values.phone}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('phone', '')}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PHONE)}
                                errorMessage={errors.phone}
                            />
                            <Input
                                withCleaner
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.email}
                                value={values.email}
                                changeHandler={handleChange}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.EMAIL)}
                                clearHandler={() => setFieldValue('email', '')}
                                errorMessage={errors.email}
                            />
                            <Input
                                withSwitcher
                                name="newPassword"
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.newPassword}
                                value={values.newPassword}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('newPassword', '')}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PASSWORD)}
                                errorMessage={errors.newPassword}
                            />
                            <Input
                                withSwitcher
                                value={values.confirmedPassword}
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.confirmedPassword}
                                name="confirmedPassword"
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('confirmedPassword', '')}
                                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.CONFIRM_PASSWORD)}
                                errorMessage={errors.confirmedPassword}
                            />
                            <Checkbox
                                name="isBusinessOwner"
                                value={values.isBusinessOwner}
                                changeHandler={handleChange}
                                lableName={translate(TRANSLATION.PAGE.PROFILE.ARE_YOU_BUSINESS_OWNER)}
                            />
                            <PrimaryButton
                                isWide
                                type="submit"
                                isLoading={isLoading}
                            >
                                {translate(TRANSLATION.PAGE.SING_UP.BUTTON)}
                            </PrimaryButton>
                        </ContentContainer>

                        <Wrapper>
                            <NavigationLabelHref
                                hrefTitle={translate(TRANSLATION.PAGE.SIGN_IN.TOP_TITLE)}
                                to={`${ROUTER.SING_IN.URL}`}
                                label={translate(TRANSLATION.PAGE.SIGN_IN.ACCOUNT_CONFIRMATION)}
                            />
                        </Wrapper>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SingUpPage;