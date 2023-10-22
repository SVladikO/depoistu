import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import QRCode from 'qrcode';

import {EditBar, QRCodeButton, QRCodeMenuTitle, ImageQR} from "./CustomerCompanies.style";

import {Company, NotificationLoading, Popup, PrimaryButton} from "components";
import {ReactComponent as EditIcon} from "assets/icons/edit.svg";

import {BE_API, fetchData} from 'utils/fetch'
import {ROUTER, URL} from "utils/config";
import {translate, TRANSLATION} from "utils/translation";
import {ReactComponent as QRCodeIcon} from "assets/icons/qr_code.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {useLocalStorage, useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {publishNotificationEvent} from "utils/event";
import {DisabledButton} from "components/Buttons/DisabledButton";

const CustomerCompaniesPage = () => {
    useScrollUp();
    useRedirectToSettingPage();
    const navigate = useNavigate();
    const customer = useSelector(state => state.customer.value);
    const [isLoading, setIsLoading] = useState(false);
    const [wasWarningShown, setWasWarningShown] = useLocalStorage(LOCAL_STORAGE_KEY.WAS_COMPANY_CREATION_WARNING_SHOW, false)
    const [companyIdForQRCode, setCompanyIdForQRCode] = useState();
    const [customerCompanies, setCustomerCompanies] = useState();

    useEffect(() => {
        if (customerCompanies || isLoading) {
            return;
        }

        setIsLoading(true);

        fetchData(BE_API.COMPANY.GET_BY_CUSTOMER_ID(customer?.id))
            .then(res => setCustomerCompanies(res.body))
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    });

    if (isLoading) {
        return <NotificationLoading/>
    }

    if (!wasWarningShown) {
        publishNotificationEvent.warning(translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.WARNING))
        setWasWarningShown(true);
    }

    const showQRCode = companyId => () => setCompanyIdForQRCode(companyId);

    return (
        <>

            <PopupQRCode companyId={companyIdForQRCode} onClose={() => setCompanyIdForQRCode('')}/>
            {customerCompanies && !!customerCompanies?.length && customerCompanies?.map(
                company =>
                    <Company company={company} key={company.id} withMoreInfo>
                        <EditBar>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.id} style={{width: '140px'}}>
                                <DisabledButton>
                                    <EditIcon/>
                                    {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.COMPANY)}
                                </DisabledButton>
                            </Link>
                            <QRCodeButton onClick={showQRCode(company.id)}><QRCodeIcon/></QRCodeButton>
                            <DisabledButton
                                onClick={
                                    () => {
                                        LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_ID_TO_EDIT_MENU_PAGE, company.id)
                                        navigate(ROUTER.EDIT_MENU.URL)
                                    }
                                }>
                                <EditIcon/>
                                {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.MENU)}
                            </DisabledButton>
                        </EditBar>
                    </Company>
            )
            }
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

    const editMenuUrl = `${window.location.origin}/${companyId}`;

    QRCode.toDataURL(editMenuUrl)
        .then(url => setSrc(url))
        .catch(err => setQrCodeGenerationError(err))

    return (
        <Popup.Bottom onClose={onClose}>
            <QRCodeMenuTitle>Menu</QRCodeMenuTitle>
            {src && <ImageQR src={src}/>}
            {qrCodeGenerationError}
        </Popup.Bottom>
    )
}

export default CustomerCompaniesPage;