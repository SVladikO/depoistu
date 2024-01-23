import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {resetAllEditMenu, setCompanyIdToEditMenu} from "features/editMenu/editMenuSlice";
import {Wrapper} from './bottom-bar-view.style'

import {QRCodeButton} from "page/customer-companies/CustomerCompanies.style";
import {PrimaryButton} from "components";

import {ReactComponent as EditIcon} from "assets/icons/edit.svg";
import {ReactComponent as QRCodeIcon} from "assets/icons/qr_code.svg";

import {scrollUp} from "utils/utils";
import {ROUTER} from "utils/config";
import {translate, TRANSLATION} from "utils/translation";
import {useDispatch} from "react-redux";

const BottomBarView = ({company, isCustomerCompaniesPage}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const showQRCode = companyId => () => setCompanyIdForQRCode(companyId);
    const [companyIdForQRCode, setCompanyIdForQRCode] = useState();

    if (!isCustomerCompaniesPage) {
        return;
    }

    return (
        <Wrapper>
            <PrimaryButton clickHandler={() => navigate(ROUTER.EDIT_COMPANY.URL + '/' + company.id)} >
                <EditIcon/>
                {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.COMPANY)}
            </PrimaryButton>
            <PrimaryButton
                isOnlyIcon
                clickHandler={showQRCode(company.id)}
            >
                <QRCodeIcon/>
            </PrimaryButton>
            <PrimaryButton
                clickHandler={
                    () => {
                        scrollUp();
                        dispatch(resetAllEditMenu())
                        dispatch(setCompanyIdToEditMenu(company.id))
                        navigate(ROUTER.EDIT_MENU.URL)
                    }
                }>
                <EditIcon/>
                {translate(TRANSLATION.PAGE.CUSTOMER_COMPANIES.BUTTON.MENU)}
            </PrimaryButton>

            {/*<PopupQRCode companyId={companyIdForQRCode} onClose={() => setCompanyIdForQRCode('')}/>*/}

        </Wrapper>
    )
}

export default BottomBarView;