import React, {useState} from 'react';
import {Input, ContentContainer,ToggleCheckbox, NotificationLoading} from "components";

import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {TRANSLATION, translate} from "utils/translation";
import {useDispatch, useSelector} from "react-redux";
import {BE_API, fetchData} from "../../utils/fetch";
import {addCustomer} from "../../features/customer/customerSlice";
import {publishNotificationEvent} from "../../utils/event";

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
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return <NotificationLoading />
    }

    return (
        <ContentContainer noShadow>
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