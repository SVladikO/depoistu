import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import QRCode from 'qrcode';

import {QRCodeMenuTitle, ImageQR, OrderPrint} from "./CustomerCompanies.style";

import {Company, NotificationLoading, Popup, PrimaryButton, RowSplitter} from "components";

import {errorHandler} from "utils/management";
import {BE_API, fetchData} from 'utils/fetch'
import {ORDER_PRINT_URL, URL} from "utils/config";
import {publishNotificationEvent} from "utils/event";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";
import {translate, TRANSLATION} from "utils/translation";
import {useLocalStorage, useRedirectToSettingPage} from "utils/hook";

const CustomerCompaniesPage = () => {
    useRedirectToSettingPage();
    const [isLoading, setIsLoading] = useState();
    const [idForQRCode, setIdForQRCode] = useState();
    const customer = useSelector(state => state.customer.value);
    const [wasWarningsShown, setWasWarningsShown] = useLocalStorage(LOCAL_STORAGE_KEY.WAS_COMPANY_CREATION_WARNINGS_SHOW, false)
    const [customerCompanies, setCustomerCompanies] = useLocalStorage(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES, undefined);

    const showQRCode = companyId => () => setIdForQRCode(companyId);

    useEffect(() => {
        if (customerCompanies || isLoading === false || isLoading || !customer) {
            return;
        }

        setIsLoading(true);

        fetchData(BE_API.COMPANY.GET_BY_CUSTOMER_ID(customer?.id))
            .then(res => setCustomerCompanies(res.body))
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
            {customerCompanies && !!customerCompanies?.length && customerCompanies
                ?.map(company => ({...company, is_verified: true}))
                ?.map(
                company =>
                    <Company
                        withMoreInfo
                        isCustomerCompaniesPage
                        key={company.id}
                        company={company}
                        showCodeQR={showQRCode(company.id)}
                    />
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
            <PopupQRCode companyId={idForQRCode} onClose={() => setIdForQRCode('')}/>
        </>
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