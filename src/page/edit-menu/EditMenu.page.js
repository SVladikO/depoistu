import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Wrapper, CompanyDetails} from "./EditMenu.style";

import {NotificationLoading, PrimaryButton, RowSplitter} from "components";

import {startLoading, stopLoading} from "features/request/requestSlice";

import {BE_API} from 'utils/fetch'
import {fetchData} from "utils/fetch";
import {URL} from "../../utils/config";
import {errorHandler} from "utils/management";
import {CITY_TRANSLATION_IDS} from "utils/cities";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import CategoryMenuView from "page-view/category-menu-view/CategoryMenuView";
import {useLocalStorage, useRedirectToSettingPage, useScrollUp} from "utils/hook";

const EditMenuPage = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [menuItems, setMenuItems] = useState([]);
    const isLoading = useSelector(state => state.request.value.isLoading);

    const companyId = LocalStorage.get(LOCAL_STORAGE_KEY.COMPANY_ID_TO_EDIT_MENU_PAGE);
    const [customerCompanies] = useLocalStorage(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const currentCompany = customerCompanies?.find((c => c.id === +companyId));

    useEffect(() => LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU, companyId), [])

    useEffect(() => {
        dispatch(startLoading());
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(BE_API.MENU_ITEM.GET_BY_COMPANY_ID(companyId))
            .then(res => {
                setMenuItems(res.body);
                setTimeout(() => dispatch(stopLoading()), 1000)
            })
            .catch(errorHandler)
            .finally(() => setTimeout(() => dispatch(stopLoading()), 1000))
    }, [companyId])

    if (isLoading) {
        return <NotificationLoading/>;
    }

    return (
        <>
            {currentCompany &&
                <CompanyDetails>
                    <div>{currentCompany.name}</div>
                    <div>{translate(TRANSLATION.PAGE.EDIT_MENU.CITY)}: {translate(CITY_TRANSLATION_IDS[currentCompany.cityId])}, {" "}</div>
                    <div>{translate(TRANSLATION.PAGE.EDIT_MENU.STREET)}: {currentCompany.street}</div>
                </CompanyDetails>
            }

            <PrimaryButton
                isWide
                withPadding
                clickHandler={() => {
                    navigate(URL.ADD_MENU_ITEM);
                    LocalStorage.remove(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT)
                }}
            >
                {translate(TRANSLATION.PAGE.EDIT_MENU.BUTTON.ADD_MENU_ITEM)}
            </PrimaryButton>
            <RowSplitter height="40px"/>

            <Wrapper>
                {!!menuItems?.length &&
                    <CategoryMenuView
                        // showAllCategories
                        showMenuItemAmount
                        menuItems={menuItems}
                        isEditMode
                        editPage
                    />
                }

            </Wrapper>
        </>
    )
}

export default EditMenuPage;