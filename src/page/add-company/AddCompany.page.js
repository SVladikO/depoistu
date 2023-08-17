import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import React, {useState} from "react";

import {FetchButton, Notification, PrimaryButton} from "../../components";

import {WarningText} from "./AddCompany.style";

import CompanyView from "../../page-view/company/company-view";

import {initialValues} from './utils';
import {URL} from "../../utils/config";
import {BE_API} from '../../utils/fetch'
import {fetchData} from "../../utils/fetch";
import {getScheduleAsString} from "../../utils/company";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

const AddCompany = () => {
    useRedirectToSettingPage();
    const [isLoading, setIsLoading] = useState(false);
    const [isCompanySaved, setIsCompanySaved] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [newCompanyId, setNewCompanyId] = useState();

    const onSubmit = values => {
        const {name, city_id, street, phone1, phone2, phone3} = values;
        const schedule = getScheduleAsString(values)
        const reqObj = {name, city_id, street, phone1, phone2, phone3, schedule};

        setIsLoading(true);
        setRequestError('')
        fetchData(BE_API.COMPANY.POST_CREATE(), reqObj)
            .then(res => {
                setIsCompanySaved(true);
                setNewCompanyId(res.body.insertId);
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES)
            })
            .catch(e => setRequestError(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    if (isCompanySaved) {
        return (
            <Notification.Success message={"Company was created"}>
                <WarningText>
                    Without menu this company won’t be shown in search
                </WarningText>
                <Link to={`${URL.EDIT_MENU}/${newCompanyId}`}>
                    <PrimaryButton isWide>
                        Add menu for this company
                    </PrimaryButton>
                </Link>
            </Notification.Success>
        )
            ;
    }

    return (
        <CompanyView
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <>
                {requestError && <Notification.Error message={requestError}/>}
                <FetchButton isWide type="submit" isLoading={isLoading}>
                    {translate(TRANSLATION.PAGE.ADD_COMPANY.BUTTON.ADD_COMPANY)}
                </FetchButton>
            </>
        </CompanyView>
    )
};


export default AddCompany;