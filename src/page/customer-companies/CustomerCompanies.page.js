import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import QRCode from 'qrcode';

import {QRCodeMenuTitle, ImageQR, OrderPrint} from "./CustomerCompanies.style";

import {Company, NotificationLoading, Popup, PrimaryButton, RowSplitter} from "components";


import {BE_API, fetchData} from 'utils/fetch'
import {errorHandler} from "utils/management";
import {publishNotificationEvent} from "utils/event";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import {translate, TRANSLATION} from "utils/translation";
import {ORDER_PRINT_URL, ROUTER, URL} from "utils/config";
import {useLocalStorage, useRedirectToSettingPage, useScrollUp} from "utils/hook";

const CustomerCompaniesPage = () => {
    useRedirectToSettingPage();
    const customer = useSelector(state => state.customer.value);
    const [isLoading, setIsLoading] = useState();
    const [wasWarningsShown, setWasWarningsShown] = useLocalStorage(LOCAL_STORAGE_KEY.WAS_COMPANY_CREATION_WARNINGS_SHOW, false)
    const [customerCompanies, setCustomerCompanies] = useLocalStorage(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES, undefined);

    useEffect(() => {
        if (customerCompanies || isLoading === false || isLoading) {
            return;
        }

        setIsLoading(true);

        fetchData(BE_API.COMPANY.GET_BY_CUSTOMER_ID(customer?.id))
            .then(res => setCustomerCompanies(res.body.map(company => ({...company, is_verified: true}))))
            .catch(errorHandler)
            .finally(() => setIsLoading(false))
    }, []);

    useEffect(() => {
        if (wasWarningsShown) {
            return;
        }
        publishNotificationEvent.warning(translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.WARNING))
        publishNotificationEvent.info(translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.VERIFICATION_INFO))
        setWasWarningsShown(true);
    }, []);

    if (isLoading) {
        return <NotificationLoading/>
    }


    return (
        <>
            {customerCompanies && !!customerCompanies?.length && customerCompanies?.map(
                company =>
                    <Company key={company.id} company={company} withMoreInfo isCustomerCompaniesPage />
            )
            }
            <RowSplitter height={"20px"}/>
            {customer && customer.canCreateCompanies > !!customerCompanies?.length &&
                <Link to={URL.ADD_COMPANY}>
                    <PrimaryButton isWide withPadding>
                        {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.ADD_COMPANY)}
                    </PrimaryButton>
                </Link>
            }
        < />
    )
};

const PopupQRCode = ({companyId, onClose}) => {
    const [qrCodeGenerationError, setQrCodeGenerationError] = useState('');
    const [src, setSrc] = useState('');

    if (!companyId) {
        return;
    }

    const editMenuUrl = `${window.location.origin}${URL.SEARCH_DETAILS}/${companyId}`;

    QRCode.toDataURL(editMenuUrl)
        .then(url => setSrc(url))
        .catch(err => setQrCodeGenerationError(err))

    return (
        <Popup.Bottom onClose={onClose}>
            <QRCodeMenuTitle>
                {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.QR_MENU_TITLE)}
            </QRCodeMenuTitle>
            {src && <ImageQR src={src}/>}
            {qrCodeGenerationError}
            <OrderPrint
                href={ORDER_PRINT_URL}
                target="_blank"
                rel="noreferrer"
            >
                {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.ORDER_PRINT)}
            </OrderPrint>
        </Popup.Bottom>
    )
}

export default CustomerCompaniesPage;