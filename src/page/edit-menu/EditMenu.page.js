import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {Wrapper, CompanyDetails} from "./EditMenu.style";

import {
    CategoryMenuRow,
    Notification,
} from "../../components";

import {startLoading, stopLoading} from "../../features/request/requestSlice";

import {BE_API} from '../../utils/fetch'
import {fetchData} from "../../utils/fetch";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {CITY_TRANSLATION_IDS} from "../../utils/cities";

const EditMenu = () => {
    useRedirectToSettingPage();
    const dispatch = useDispatch();
    const {companyId} = useParams();
    const isLoading = useSelector(state => state.request.value.isLoading);
    const customerCompanies = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const currentCompany = customerCompanies.find((c => c.ID === +companyId));
    const [menuItems, setMenuItems] = useState();
    const [requestError, setRequestError] = useState('');

    useEffect(() => {
        LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU, companyId);
    })

    useEffect(() => {
        dispatch(startLoading());
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(BE_API.MENU_ITEM.GET_BY_COMPANY_ID(companyId))
            .then(res => {
                setMenuItems(res.body);
                setTimeout(() => dispatch(stopLoading()), 1000)
            })
            .catch(e => setRequestError(e.body.errorMessage))
            .finally(() => setTimeout(() => dispatch(stopLoading()), 1000))
    }, [companyId])

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }


    return (
        <>
            {currentCompany &&
                <CompanyDetails>
                    {currentCompany.NAME},
                    {translate(CITY_TRANSLATION_IDS[currentCompany.CITY_ID])},
                    {currentCompany.STREET}
                </CompanyDetails>
            }
            <Wrapper>
                {menuItems &&
                    <CategoryMenuRow
                        showAllCategories
                        showMenuItemAmount
                        menuItems={menuItems}
                        withEditIcon
                        editPage
                    />
                }

            </Wrapper>
        </>
    )
}

export default EditMenu;