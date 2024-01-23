import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Wrapper} from './bottom-bar-view.style'
import {resetAllEditMenu, setCompanyIdToEditMenu} from "features/editMenu/editMenuSlice";

import {PrimaryButton} from "components";

import {ReactComponent as EditIcon} from "assets/icons/edit.svg";
import {ReactComponent as QRCodeIcon} from "assets/icons/qr_code.svg";

import {ROUTER} from "utils/config";
import {scrollUp} from "utils/utils";
import {translate, TRANSLATION} from "utils/translation";

const BottomBarView = ({company, isCustomerCompaniesPage, showCodeQR}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

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
                clickHandler={showCodeQR}
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


        </Wrapper>
    )
}

export default BottomBarView;