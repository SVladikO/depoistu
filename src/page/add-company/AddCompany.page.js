import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import React, {useState} from "react";

import {ContentContainer, FetchButton, Notification, PrimaryButton} from "../../components";

import CompanyView from "../../page-view/company/company-view";

import {initialValues} from './utils';
import {URL} from "../../utils/config";
import {BE_API} from '../../utils/fetch'
import {fetchData} from "../../utils/fetch";
import {getScheduleAsString} from "../../utils/company";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {publishNotificationEvent} from "../../utils/event";

const AddCompany = () => {
    useRedirectToSettingPage();
    const [isLoading, setIsLoading] = useState(false);
    const [wasCompanyCreated, setWasCompanyCreated] = useState(false);
    const [newCompanyId, setNewCompanyId] = useState();

    const onSubmit = values => {
        const {name, city_id, street, phone1, phone2, phone3} = values;
        const schedule = getScheduleAsString(values)
        const reqObj = {name, city_id, street, phone1, phone2, phone3, schedule};

        setIsLoading(true);
        fetchData(BE_API.COMPANY.POST_CREATE(), reqObj)
            .then(res => {
                setWasCompanyCreated(true);
                setNewCompanyId(res.body.insertId);
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES)
                publishNotificationEvent.success("Company was created");
                publishNotificationEvent.warning("Without menu this company won’t be shown in search")
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    if (wasCompanyCreated) {
        return (
            <ContentContainer>
                <Link to={`${URL.EDIT_MENU}/${newCompanyId}`}>
                    <PrimaryButton isWide>Add menu for this company</PrimaryButton>
                </Link>
            </ContentContainer>
        )
            ;
    }

    return (
        <CompanyView
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <>
                <FetchButton isWide type="submit" isLoading={isLoading}>
                    {translate(TRANSLATION.PAGE.ADD_COMPANY.BUTTON.ADD_COMPANY)}
                </FetchButton>
            </>
        </CompanyView>
    )
};


export default AddCompany;