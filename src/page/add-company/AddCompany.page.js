import "swiper/css";
import "swiper/css/pagination";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

import {PrimaryButton} from "components";

import CompanyView from "page-view/company/company-view";

import {initialValues} from './utils';
import {URL} from "utils/config";
import {BE_API} from 'utils/fetch'
import {fetchData} from "utils/fetch";
import {getScheduleAsString} from "utils/company";
import {errorHandler} from "utils/management";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";

const AddCompany = () => {
    useRedirectToSettingPage();
    const scrollUp = useScrollUp();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = values => {
        const {name, phone1, phone2, phone3, cityId, street, longitude, latitude} = values;
        const schedule = getScheduleAsString(values)
        const reqObj = {name, phone1, phone2, phone3, cityId, street, longitude, latitude, schedule};
        scrollUp();

        setIsLoading(true);
        fetchData(BE_API.COMPANY.POST_CREATE(), reqObj)
            .then(() => {
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES)
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.COMPANY.WAS_CREATED));
                publishNotificationEvent.warning(translate(TRANSLATION.NOTIFICATION.COMPANY.CREATE_MENU_SUGGESTION))

                navigate(URL.CUSTOMER_COMPANIES);
            })
            .catch(errorHandler)
            .finally(() => setIsLoading(false))
    }

    return (
        <CompanyView
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
                <PrimaryButton isWide type="submit" isLoading={isLoading} withPadding>
                    {translate(TRANSLATION.PAGE.ADD_COMPANY.BUTTON.ADD_COMPANY)}
                </PrimaryButton>
        </CompanyView>
    )
};


export default AddCompany;