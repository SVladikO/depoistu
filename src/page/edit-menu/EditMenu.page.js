import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Wrapper, CompanyDetails} from "./EditMenu.style";

import {
    NotificationLoading, PrimaryButton,
} from "components";

import {startLoading, stopLoading} from "features/request/requestSlice";

import {BE_API} from 'utils/fetch'
import {fetchData} from "utils/fetch";
import {useLocalStorage, useLocalStorageFetch, useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {CITY_TRANSLATION_IDS} from "utils/cities";
import CategoryMenuView from "page-view/category-menu-view/CategoryMenuView";
import {publishNotificationEvent} from "utils/event";
import {URL} from "../../utils/config";
import {Link} from "react-router-dom";

const EditMenu = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const dispatch = useDispatch();
    const companyId = LocalStorage.get(LOCAL_STORAGE_KEY.COMPANY_ID_TO_EDIT_MENU_PAGE);
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [menuItems, setMenuItems] = useState([]);
    const customer = useSelector(state => state.customer.value);
    const [customerCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES,
        [],
        BE_API.COMPANY.GET_BY_CUSTOMER_ID(customer?.id)
    );
    const currentCompany = customerCompanies?.find((c => c.id === +companyId));
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
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setTimeout(() => dispatch(stopLoading()), 1000))
    }, [companyId])

    if (isLoading) {
        return <NotificationLoading/>;
    }

    return (
        <>
            {currentCompany &&
                <CompanyDetails>
                    {currentCompany.name}, {" "}
                    {translate(CITY_TRANSLATION_IDS[currentCompany.cityId])}, {" "}
                    {currentCompany.street}
                </CompanyDetails>
            }
            <Wrapper>
                {!!menuItems?.length &&
                    <CategoryMenuView
                        // showAllCategories
                        showMenuItemAmount
                        menuItems={menuItems}
                        withEditIcon
                        editPage
                    />
                }
                {!menuItems?.length && <Link to={`${URL.ADD_MENU_ITEM}`}>
                    <PrimaryButton isWide withPadding>
                        {translate(TRANSLATION.PAGE.EDIT_MENU.BUTTON.ADD_MENU_ITEM)}
                    </PrimaryButton>
                </Link>}
            </Wrapper>
        </>
    )
}

export default EditMenu;