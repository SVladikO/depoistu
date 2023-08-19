import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";

import {Notification, RowSplitter, PrimaryButton, FetchButton, ContentContainer} from "../../components";

import {ReactComponent as RemoveIcon} from "../../assets/icons/remove_icon.svg";

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
import Popup, {enableScrollOnBody, disableScrollOnBody} from "../../components/Popup/Popup";
import {PopupButtons, PopupTitle} from "./EditCompany.style";
import {publishNotificationEvent} from "../../utils/event";

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

    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [wasCompanyDeleted, setWasCompanyDeleted] = useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false)

    const openDeletePopup = () => {
        disableScrollOnBody();
        setIsConfirmDeletePopupOpen(true)
    }
    const closeDeletePopup = () => {
        enableScrollOnBody();
        setIsConfirmDeletePopupOpen(false)
    }

    if (wasCompanyDeleted) {
        return (
            <ContentContainer>
                <Link to={URL.CUSTOMER_COMPANIES}>
                    <PrimaryButton isWide>
                        Open my companies page
                    </PrimaryButton>
                </Link>
            </ContentContainer>
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
        setIsLoadingDelete(true)
        closeDeletePopup()
        document.body.style.overflowY = 'auto';

        fetchData(BE_API.COMPANY.DELETE(), {method: 'delete', companyId})
            .then(() => {
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
                publishNotificationEvent.success(translate(TRANSLATION.PAGE.EDIT_COMPANY.NOTIFICATION.COMPANY_WAS_DELETED))
                setWasCompanyDeleted(true)
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoadingDelete(false))
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
        const {name, city_id, street, phone1, phone2, phone3} = values;
        const schedule = getScheduleAsString(values)
        const reqObj = {id: companyId, name, city_id, street, phone1, phone2, phone3, schedule, method: 'put'};
        setIsLoadingUpdate(true);

        fetchData(BE_API.COMPANY.PUT_UPDATE(), reqObj)
            .then(res => {
                const updatedCompany = res.body[0];
                updateCompaniesInLocalStorage(updatedCompany)

                publishNotificationEvent.success('Company was updated')
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoadingUpdate(false))
    }


    if (!customerCompaniesFromLocalStorage.length || !companies.find((c => c.ID === companyId))) {
        return (
            <Notification.Error message={translate(TRANSLATION.PAGE.EDIT_COMPANY.NOTIFICATION.NO_COMPANY_BY_THIS_ID)}>
                <Link
                    to={URL.CUSTOMER_COMPANIES}>{translate(TRANSLATION.PAGE.EDIT_COMPANY.NOTIFICATION.OPEN_MY_COMPANIES_PAGE)}</Link>
            </Notification.Error>
        );
    }

    const EditCompanyButton = () => (
        <FetchButton
            isWide
            type="submit"
            isLoading={isLoadingUpdate}
        >
            {translate(TRANSLATION.PAGE.EDIT_COMPANY.BUTTON.EDIT_COMPANY)}
        </FetchButton>
    );
    const DeleteCompanyButton = () => (
        <FetchButton isWide isLoading={isLoadingDelete} clickHandler={openDeletePopup}><RemoveIcon/>
            {translate(TRANSLATION.PAGE.EDIT_COMPANY.BUTTON.DELETE_COMPANY)}
        </FetchButton>
    )

    return (
        <>

            <CompanyView
                initialValues={getInitialValues(company, schedule)}
                onSubmit={onSubmit}
            >
                <>
                    {isConfirmDeletePopupOpen && (
                        <Popup.Info showCloseButton={false}>
                            <PopupTitle>
                                {translate(TRANSLATION.COMPONENTS.POPUP.ARE_YOU_SURE)}
                            </PopupTitle>
                            <PopupButtons>
                                <PrimaryButton isWide onClick={deleteCompany}>
                                    {translate(TRANSLATION.YES)}
                                </PrimaryButton>
                                <PrimaryButton isWide onClick={closeDeletePopup}>
                                    {translate(TRANSLATION.NO)}
                                </PrimaryButton>
                            </PopupButtons>
                        </Popup.Info>
                    )}
                    <EditCompanyButton />
                    <RowSplitter height={'25px'}/>
                    <RowSplitter height={'25px'}/>
                    <DeleteCompanyButton/>
                </>
            </CompanyView>
        </>
    )
};

export default EditCompany;