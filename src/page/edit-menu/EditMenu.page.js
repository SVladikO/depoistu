import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {ContentContainer, NotificationLoading, PrimaryButton, RowSplitter} from "components";

import CategoryMenuView from "page-view/category-menu-view/CategoryMenuView";

import {fetchGetMenuItemsByCompanyId} from "features/editMenu/thunks";

import {URL} from "utils/config";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {useLocalStorage, useRedirectToSettingPage} from "utils/hook";

const EditMenuPage = () => {
    useRedirectToSettingPage();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const company_id = useSelector(state => state.editMenu.company_id)
    const editMenuItems = useSelector(state => state.editMenu.editMenuItems)
    const isMenuItemsLoading = useSelector(state => state.editMenu.isGetMenuItemsLoading);

    const [customerCompanies] = useLocalStorage(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const currentCompany = customerCompanies?.find((c => c.id === +company_id));

    useEffect(() => {
        if (editMenuItems?.length) {
            return;
        }

        dispatch(fetchGetMenuItemsByCompanyId(company_id))
    }, [company_id]);

    if (isMenuItemsLoading) {
        return <NotificationLoading/>;
    }

    const onClickAddMenuItem = () => {
        navigate(URL.ADD_MENU_ITEM);
        LocalStorage.remove(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT)
    }

    return (
        <>
            {currentCompany && (
                <ContentContainer noShadow>
                    <h2>{currentCompany.name}</h2>
                </ContentContainer>
            )
            }
            <RowSplitter height="20px"/>
            <PrimaryButton isWide withPadding clickHandler={onClickAddMenuItem}>
                {translate(TRANSLATION.PAGE.EDIT_MENU.BUTTON.ADD_MENU_ITEM)}
            </PrimaryButton>
            <RowSplitter height="40px"/>
            {!!editMenuItems?.length && (
                <CategoryMenuView
                    showMenuItemAmount
                    menuItems={editMenuItems}
                    isEditMenuItemPage
                />
            )
            }
        </>
    )
}

export default EditMenuPage;