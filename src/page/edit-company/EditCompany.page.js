import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";

import {Notification, PrimaryButton, RowSplitter, SecondaryButton} from "../../components";

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

import CompanyView from "../../page-view/company/company-view";

import getInitialValues from "./utils";
import {URL} from "../../utils/config";
import {BE_API} from '../../utils/fetch'
import {fetchData} from "../../utils/fetch";
import {initSchedule} from "../../utils/company";
import {getScheduleAsString} from "../../utils/company";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import Popup from "../../components/Popup/Popup";
import {PopupButtons, PopupTitle} from "./EditCompany.style";

//We need this variable after call LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES) on delete company success
//when we open customer companies page it will make request to BE and user will have updated list of companies.
const companyFakeData = {
    CITY_ID: '',
    SCHEDULE: ',,,,,,',
    PHOTOS: '',
    PHONE: ''
}

const EditCompany = () => {
    useRedirectToSettingPage();
    const companyId = +useParams().companyId;
    const customerCompaniesFromLocalStorage = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES) || [{ID: companyId, ...companyFakeData}];
    const companies = customerCompaniesFromLocalStorage.length ? customerCompaniesFromLocalStorage : [{ID: companyId, ...companyFakeData}];
    const company = companies.find((c => c.ID === companyId)) || companyFakeData;

    const schedule = initSchedule(company?.SCHEDULE);

    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [isCompanyDeleted, setIsCompanyDeleted] = useState(false);
    const [isCompanyUpdated, setIsCompanyUpdated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openPopup = () => setIsModalOpen(true)
    const closePopup = () => setIsModalOpen(false)

    const deleteCompany = () => {
        setIsLoading(true)

        fetchData(BE_API.COMPANY.DELETE(companyId), {method: 'delete'})
            .then(() => {
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
                setIsCompanyDeleted(true);
                setIsModalOpen(false)
            })
            .catch(res => {
                setRequestError(res.body.message)
            })
            .finally(() => setIsLoading(false))
    }

    const updateCompaniesInLocalStorage = updatedCompany => {
        const updatedCompanies = customerCompaniesFromLocalStorage.map(company => {
            if (company.ID === updatedCompany.ID) {
                return updatedCompany;
            }

            return company;
        })

        LocalStorage.set(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES, updatedCompanies)
    }

    const onSubmit = values => {
        const {name, city_id, street, phone} = values;
        const schedule = getScheduleAsString(values)
        const reqObj = {id: companyId, name, city_id, street, phone, schedule, method: 'put'};
        setIsLoading(true);

        fetchData(BE_API.COMPANY.PUT_UPDATE(), reqObj)
            .then(res => {
                const updatedCompany = res.body[0];
                updateCompaniesInLocalStorage(updatedCompany)

                setIsCompanyUpdated(true);
            })
            .catch(res => setRequestError(res.body.message))
            .finally(() => setIsLoading(false))
    }

    if (isCompanyDeleted) {
        return (
            <Notification.Success message={`Company was deleted.`}>
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

    if (isLoading) {
        return <Notification.Loading/>;
    }

    const DeleteCompanyButton = () => (
        <SecondaryButton isWide onClick={openPopup}>
            <RemoveIcon/>
            {translate(TRANSLATION.PAGE.EDIT_COMPANY.BUTTON.DELETE_COMPANY)}
        </SecondaryButton>
    )

    return (
        <>
            {isModalOpen && (
                <Popup.Info showCloseButton={false}>
                    <PopupTitle>
                        {translate(TRANSLATION.COMPONENTS.POPUP.ARE_YOU_SURE)}
                    </PopupTitle>
                    <PopupButtons>
                        <PrimaryButton isWide onClick={deleteCompany}>
                            {translate(TRANSLATION.YES)}
                        </PrimaryButton>
                        <PrimaryButton isWide onClick={closePopup}>
                            {translate(TRANSLATION.NO)}
                        </PrimaryButton>
                    </PopupButtons>
                </Popup.Info>
            )}
            {requestError && <Notification.Error message={requestError} />}
            {isCompanyUpdated && <Notification.Success message={"Company was updated."} />}
            <DeleteCompanyButton />
            <RowSplitter height="15px" />
            <CompanyView
                initialValues={getInitialValues(company, schedule)}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.EDIT_COMPANY.BUTTON.EDIT_COMPANY)}
            />
        </>
    )
};

export default EditCompany;