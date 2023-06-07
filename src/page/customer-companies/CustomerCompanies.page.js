import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import QRCode from 'qrcode';

import {EditBar, QRCodeButton, ImageQR} from "./CustomerCompanies.style";

import {Company, Notification, PrimaryButton, Popup} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";

import {BE_API} from '../../utils/fetch'
import {ROUTER, URL} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {ReactComponent as QRCodeIcon} from "../../icons/qr_code.svg";

const PopupQRCode = ({companyId, onClose}) => {
    const [qrCodeGenerationError, setQrCodeGenerationError] = useState('');
    const [src, setSrc] = useState('');

    if (!companyId) {
        return;
    }

    const editMenuUrl = `${window.location.origin}${URL.EDIT_MENU}/${companyId}`;

    QRCode.toDataURL(editMenuUrl)
        .then(url => setSrc(url))
        .catch(err => setQrCodeGenerationError(err))

    return (
        <Popup.Info onClose={onClose}>
            {src && <ImageQR src={src}/>}
            {qrCodeGenerationError}
        </Popup.Info>
    )
}
const CustomerCompaniesPage = () => {
    const navigate = useNavigate();
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [companyIdForQRCode, setCompanyIdForQRCode] = useState();

    const [requestError, setRequestError] = useState('');
    const [customer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));

    const [customerCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES,
        [],
        BE_API.COMPANY.GET_BY_CUSTOMER_ID(customer.ID),
        setRequestError
    );

    if (!customer) {
        return navigate(URL.SETTING)
    }

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    const showQRCode = companyId => () => setCompanyIdForQRCode(companyId);

    return (
        <>
            <PopupQRCode companyId={companyIdForQRCode} onClose={() => setCompanyIdForQRCode('')}/>
            {customerCompanies.map(
                company =>
                    <Company company={company} key={company.ID}>
                        <EditBar>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID} style={{width: '140px'}}>
                                <PrimaryButton isWide><EditIcon/>Company</PrimaryButton>
                            </Link>
                            <QRCodeButton onClick={showQRCode(company.ID)}><QRCodeIcon/></QRCodeButton>
                            <Link to={ROUTER.EDIT_MENU.URL + '/' + company.ID} style={{width: '140px'}}>
                                <PrimaryButton isWide><EditIcon/>Menu</PrimaryButton>
                            </Link>
                        </EditBar>
                    </Company>
            )
            }
            <Link to={URL.ADD_COMPANY}>
                <PrimaryButton isWide>+ Add new company</PrimaryButton>
            </Link>
        < />
    )
};

export default CustomerCompaniesPage;