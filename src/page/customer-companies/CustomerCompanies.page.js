import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import QRCode from 'qrcode';

import {EditBar, QRCodeButton, ImageQR} from "./CustomerCompanies.style";

import {Company, Notification, PrimaryButton, Popup} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";

import {BE_API} from '../../utils/fetch'
import {ROUTER, URL} from "../../utils/config";
import {useLocalStorage, useLocalStorageFetch, useRedirectToSettingPage} from "../../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {ReactComponent as QRCodeIcon} from "../../icons/qr_code.svg";
import {translate, TRANSLATION} from "../../utils/translation";

const CustomerCompaniesPage = () => {
    useRedirectToSettingPage();
    const [customer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [companyIdForQRCode, setCompanyIdForQRCode] = useState();
    const [isVisibleCompanyCreationWarning, setIsVisibleCompanyCreationWarning] = useLocalStorage(LOCAL_STORAGE_KEY.IS_VISIBLE_COMPANY_CREATION_WARNING, false);
    const [requestError, setRequestError] = useState('');
    const [customerCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES,
        [],
        BE_API.COMPANY.GET_BY_CUSTOMER_ID(customer?.ID),
        setRequestError
    );


    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    const showQRCode = companyId => () => setCompanyIdForQRCode(companyId);

    const closeInfoPopUp = () => setIsVisibleCompanyCreationWarning(true);


    return (
        <>
            {!isVisibleCompanyCreationWarning && <Popup.Info
                onClose={closeInfoPopUp}>{translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.WARNING)}</Popup.Info>}
            <PopupQRCode companyId={companyIdForQRCode} onClose={() => setCompanyIdForQRCode('')}/>
            {customerCompanies.map(
                company =>
                    <Company company={company} key={company.ID}>
                        <EditBar>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID} style={{width: '140px'}}>
                                <PrimaryButton
                                    isWide><EditIcon/>{translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.COMPANY)}
                                </PrimaryButton>
                            </Link>
                            <QRCodeButton onClick={showQRCode(company.ID)}><QRCodeIcon/></QRCodeButton>
                            <Link to={ROUTER.EDIT_MENU.URL + '/' + company.ID} style={{width: '140px'}}>
                                <PrimaryButton
                                    isWide><EditIcon/>{translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.MENU)}
                                </PrimaryButton>
                            </Link>
                        </EditBar>
                    </Company>
            )
            }
            <Link to={URL.ADD_COMPANY}>
                <PrimaryButton
                    isWide>{translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.ADD_COMPANY)}</PrimaryButton>
            </Link>
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
        <Popup.InfoText onClose={onClose}>
            {src && <ImageQR src={src}/>}
            {qrCodeGenerationError}
        </Popup.InfoText>
    )
}

export default CustomerCompaniesPage;