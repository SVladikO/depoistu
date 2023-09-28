import "swiper/css";
import "swiper/css/pagination";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

import {ContentContainer, PrimaryButton} from "components";

import CompanyView from "page-view/company/company-view";

import {initialValues} from './utils';
import {URL} from "utils/config";
import {BE_API} from 'utils/fetch'
import {fetchData} from "utils/fetch";
import {getScheduleAsString} from "utils/company";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";

const AddCompany = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [wasCompanyCreated, setWasCompanyCreated] = useState(false);
    const [newCompanyId, setNewCompanyId] = useState();

    const onSubmit = values => {
        const {name, cityId, street, phone1, phone2, phone3} = values;
        const schedule = getScheduleAsString(values)
        const reqObj = {name, cityId, street, phone1, phone2, phone3, schedule};

        setIsLoading(true);
        fetchData(BE_API.COMPANY.POST_CREATE(), reqObj)
            .then(res => {
                setWasCompanyCreated(true);
                setNewCompanyId(res.body.insertId);
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES)
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.COMPANY.WAS_CREATED));
                publishNotificationEvent.warning(translate(TRANSLATION.NOTIFICATION.COMPANY.CREATE_MENU_SUGGESTION))
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    if (wasCompanyCreated) {
        return (
            <ContentContainer noShadow>
                <PrimaryButton
                    isWide
                    clickHandler={() => {
                        LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_ID_TO_EDIT_MENU_PAGE, newCompanyId)
                        navigate(URL.EDIT_MENU)
                    }}
                >{translate(TRANSLATION.PAGE.ADD_COMPANY.BUTTON.ADD_MENU)}</PrimaryButton>
            </ContentContainer>
        )
    }

    return (
        <CompanyView
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
                <PrimaryButton isWide type="submit" isLoading={isLoading}>
                    {translate(TRANSLATION.PAGE.ADD_COMPANY.BUTTON.ADD_COMPANY)}
                </PrimaryButton>
        </CompanyView>
    )
};


export default AddCompany;