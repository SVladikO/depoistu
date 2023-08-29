import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import QRCode from 'qrcode';

import {EditBar, QRCodeButton, QRCodeMenuTitle, ImageQR} from "./CustomerCompanies.style";

import {Company, NotificationLoading, Popup, PrimaryButton} from "../../components";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";

import {BE_API} from '../../utils/fetch'
import {ROUTER, URL} from "../../utils/config";
import {cyrillicToLatin, translate, TRANSLATION} from "../../utils/translation";
import {ReactComponent as QRCodeIcon} from "../../assets/icons/qr_code.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {useLocalStorage, useLocalStorageFetch, useRedirectToSettingPage, useScrollUp} from "../../utils/hook";
import {publishNotificationEvent} from "../../utils/event";

const CustomerCompaniesPage = () => {
    useScrollUp();
    useRedirectToSettingPage();
    const navigate = useNavigate();
    const [customer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [wasWarningShown, setWasWarningShown] = useLocalStorage(LOCAL_STORAGE_KEY.WAS_COMPANY_CREATION_WARNING_SHOW, false)
    const [companyIdForQRCode, setCompanyIdForQRCode] = useState('');
    const [companyNameForQRCode, setCompanyNameForQRCode] = useState('');
    const [customerCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES,
        [],
        BE_API.COMPANY.GET_BY_CUSTOMER_ID(customer?.ID)
    );

    if (!wasWarningShown) {
        publishNotificationEvent.warning(translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.WARNING))
        setWasWarningShown(true);
    }

    if (isLoading) {
        return <NotificationLoading/>;
    }

    const showQRCode = (companyId, companyName) => () => {
        setCompanyIdForQRCode(companyId)
        setCompanyNameForQRCode(companyName)
    }

    const onClosePopup = () => {
        setCompanyIdForQRCode('')
        setCompanyNameForQRCode('')
    }

    return (
        <>
            <PopupQRCode
                companyId={companyIdForQRCode}
                companyName={companyNameForQRCode}
                onClose={onClosePopup}
            />
            {customerCompanies.map(
                company =>
                    <Company company={company} key={company.ID}>
                        <EditBar>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID} style={{width: '140px'}}>
                                <PrimaryButton isWide>
                                    <EditIcon/>
                                    {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.COMPANY)}
                                </PrimaryButton>
                            </Link>
                            <QRCodeButton onClick={showQRCode(company.ID, company.NAME)}><QRCodeIcon/></QRCodeButton>
                            <PrimaryButton
                                isWide
                                style={{width: '140px'}}
                                onClick={
                                    () => {
                                        LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_ID_TO_EDIT_MENU_PAGE, company.ID)
                                        navigate(ROUTER.EDIT_MENU.URL)
                                    }
                                }>
                                <EditIcon/>
                                {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.MENU)}
                            </PrimaryButton>
                        </EditBar>
                    </Company>
            )
            }
            <Link to={URL.ADD_COMPANY}>
                <PrimaryButton isWide>
                    {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.ADD_COMPANY)}
                </PrimaryButton>
            </Link>
        < />
    )
};

const PopupQRCode = ({companyId, companyName, onClose}) => {
    const [qrCodeGenerationError, setQrCodeGenerationError] = useState('');
    const [src, setSrc] = useState('');

    if (!companyId) {
        return;
    }

    const latinCompanyName = cyrillicToLatin(companyName).split(' ').join('_')
    const editMenuUrl = `${window.location.origin}/${companyId}/${latinCompanyName}`;

    QRCode.toDataURL(editMenuUrl)
        .then(url => setSrc(url))
        .catch(err => setQrCodeGenerationError(err))

    return (
        <Popup.InfoText onClose={onClose}>
            <QRCodeMenuTitle>Menu</QRCodeMenuTitle>
            {src && <ImageQR src={src}/>}
            {qrCodeGenerationError}
        </Popup.InfoText>
    )
}

export default CustomerCompaniesPage;