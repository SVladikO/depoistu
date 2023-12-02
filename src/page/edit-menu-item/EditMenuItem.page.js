import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {PrimaryButton, RowSplitter, SecondaryButton} from "components";
import MenuItemView from "page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "assets/icons/remove_icon.svg";

import {URL} from "utils/config";
import {fetchData, BE_API} from "utils/fetch";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";
import {errorHandler} from "utils/management";

const EditMenuItemPage = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const navigate = useNavigate();
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    let menuItemCandidateToEdit = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);

    //Bugfix.  When we inserted data trough sql we put null which now in input which can't handle null.
    const price_1 = menuItemCandidateToEdit.price_1 || "";
    const price_2 = menuItemCandidateToEdit.price_2 || "";
    const price_3 = menuItemCandidateToEdit.price_3 || "";
    const size_1 = menuItemCandidateToEdit.size_1 || "";
    const size_2 = menuItemCandidateToEdit.size_2 || "";
    const size_3 = menuItemCandidateToEdit.size_3 || "";

    menuItemCandidateToEdit = {...menuItemCandidateToEdit, price_1, price_2, price_3, size_1, size_2, size_3}

    if (!menuItemCandidateToEdit) {
        return navigate(URL.SETTING)
    }

    const onSubmit = values => {
        setIsLoadingUpdate(true);
        const reqObj = {
            method: 'put',
            id: menuItemCandidateToEdit.id,
            ...values
        };

        fetchData(BE_API.MENU_ITEM.PUT_UPDATE(), reqObj)
            .then(res => {
                const updatedMenuItem = res.body[0]
                LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, updatedMenuItem);
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_UPDATED))
            })
            .catch(errorHandler)
            .finally(() => setIsLoadingUpdate(false))
    }

    const deleteMenuItem = () => {
        setIsLoadingDelete(true)

        fetchData(BE_API.MENU_ITEM.DELETE(),
            {
                method: 'delete',
                id: menuItemCandidateToEdit.id,
            })
            .then(() => {
                navigate(URL.EDIT_MENU)
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_DELETED))
            })
            .catch(errorHandler)
            .finally(() => setTimeout(() => setIsLoadingDelete(false), 1000))
    }

    return (
        <>
            <RowSplitter height={'15px'}/>
            <MenuItemView
                defaultInitialValue={menuItemCandidateToEdit || {}}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}
            >
                <RowSplitter height={'10px'}/>
                <PrimaryButton
                    isWide
                    type="submit"
                    isLoading={isLoadingUpdate}
                    withPadding
                >
                    {translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.UPDATE_MENU_ITEM)}
                </PrimaryButton>
            </MenuItemView>
            <RowSplitter height={'50px'}/>
            <SecondaryButton
                isWide
                isLoading={isLoadingDelete}
                clickHandler={deleteMenuItem}
                withPadding
            >
                <RemoveIcon/>
                {translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.DELETE_MENU_ITEM)}
            </SecondaryButton>
        </>
    )
}

export default EditMenuItemPage;