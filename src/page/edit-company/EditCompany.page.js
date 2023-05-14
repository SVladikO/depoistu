import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {Notification, SecondaryButton} from "../../components";

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {initSchedule} from "../../utils/utils";
import {fetchData} from "../../utils/fetch";
import {BE_API, URL} from "../../utils/config";
import CompanyView from "../../page-view/company/company-view";
import getInitialValues from "./utils";

//We need this variable after call LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES) on delete company success
//when we open customer companies page it will make request to BE and user will have updated list of companies.
const companyFakeData = {
    CITY: '',
    SCHEDULE: ',,,,,,',
    PHOTOS: '',
    PHONE: ''
}

const EditCompany = () => {
    const companyId = +useParams().companyId;
    const customerCompaniesFromLocalStorage = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES) || [{ID: companyId, ...companyFakeData}];
    const companies = customerCompaniesFromLocalStorage.length ? customerCompaniesFromLocalStorage : [{ID: companyId, ...companyFakeData}];
    const company = companies.find((c => c.ID === companyId)) || companyFakeData;

    const schedule = initSchedule(company?.SCHEDULE);

    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [isCompanyDeleted, setIsCompanyDeleted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (isCompanyDeleted) {
        return (
            <Notification.Success message={`Company '${company.NAME}' from '${company.CITY}' was deleted.`}>
                <Link to={URL.CUSTOMER_COMPANIES}>Open my companies page.</Link>
            </Notification.Success>
        );
    }

    if (!customerCompaniesFromLocalStorage.length || !companies.find((c => c.ID === companyId))) {
        return (
            <Notification.Error message={'No company by this id'}>
                <Link to={URL.CUSTOMER_COMPANIES}>Open my companies page.</Link>
            </Notification.Error>
        );
    }

    const deleteCompany = () => {
        setIsLoading(true)

        fetchData(BE_API.DELETE_COMPANY_CREATE(companyId), {method: 'delete'})
            .then(res => {
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
                setIsCompanyDeleted(true);
            })
            .catch(res => {
                setRequestError(res.status + " Error: " + res.body.errorMessage)
            })
            .finally(() => setIsLoading(false))
    }

    const onSubmit = values => console.log(values);

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
            <SecondaryButton isWide onClick={deleteCompany}><RemoveIcon/> Delete company</SecondaryButton>
            <CompanyView
                initialValues={getInitialValues(company, schedule)}
                onSubmit={onSubmit}
            />
        </>
    )
};

export default EditCompany;