import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Input, ContentContainer,ToggleCheckbox, NotificationLoading} from "components";

import {TRANSLATION, translate} from "utils/translation";
import {BE_API, fetchData, errorHandler} from "utils/fetch";
import {addCustomer} from "features/customer/customerSlice";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";

const EditCustomerPage = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const customer = useSelector(state => state.customer.value);

    const changeAccountType = () => {
        setIsLoading(true);

        fetchData(BE_API.CUSTOMER.EDIT_CUSTOMER_TYPE(), {isBusinessOwner: !customer.isBusinessOwner})
            .then(() => {
                dispatch(addCustomer({...customer, isBusinessOwner: !customer.isBusinessOwner}))
            })
            .catch(errorHandler)
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return <NotificationLoading />
    }

    return (
        <ContentContainer noShadow padding={'30px 15px 15px'}>
            <Input
                value={customer.name}
                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.NAME)}
            />
            <Input
                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.PHONE)}
                value={customer.phone}
            />
            <Input
                value={customer.email}
                labelName={translate(TRANSLATION.INPUT_LABEL.CUSTOMER.EMAIL)}
            />

            <ToggleCheckbox
                label={translate(TRANSLATION.PAGE.PROFILE.ARE_YOU_BUSINESS_OWNER)}
                isChecked={customer.isBusinessOwner}
                changeHandler={changeAccountType}
            />
        </ContentContainer>
    )
}


export default EditCustomerPage;