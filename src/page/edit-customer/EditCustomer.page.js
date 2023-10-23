import React, {useState} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {Input, ContentContainer, PrimaryButton, Checkbox} from "components";

import validation from "utils/validation";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {TRANSLATION, translate} from "utils/translation";
import {useSelector} from "react-redux";
import {BE_API, fetchData} from "../../utils/fetch";
import {addCustomer} from "../../features/customer/customerSlice";
import {publishNotificationEvent} from "../../utils/event";

const EditCustomerSchema = Yup.object().shape(validation.customer.editCustomer);

const EditCustomerPage = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const customer = useSelector(state => state.customer.value);
    console.log(2222, customer);

    const onSubmit = values => {
        setWasSubmitted(true);
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: customer.name,
                    phone: customer.phone,
                    email: customer.email,
                    isBusinessOwner: customer.isBusinessOwner,
                }}
                validationSchema={EditCustomerSchema}
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
                            <Checkbox
                                name="isBusinessOwner"
                                value={values.isBusinessOwner}
                                changeHandler={handleChange}
                                lableName={"Are you business owner ?"}
                            />
                            <PrimaryButton type="submit" isWide>
                                {translate(TRANSLATION.PAGE.PROFILE.BUTTON.CHANGE)}
                            </PrimaryButton>
                        </ContentContainer>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default EditCustomerPage;