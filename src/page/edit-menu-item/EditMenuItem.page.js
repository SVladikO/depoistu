import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {PrimaryButton, RowSplitter} from "components";
import MenuItemView from "page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "assets/icons/remove_icon.svg";

import {URL} from "utils/config";
import {fetchData, BE_API} from "utils/fetch";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";

const EditMenuItemPage = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const navigate = useNavigate();
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const menuItemCandidateToEdit = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);

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
                publishNotificationEvent.success("Menu item was updated.")
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
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
                publishNotificationEvent.success("Menu item was deleted.")
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setTimeout(() => setIsLoadingDelete(false), 1000))
    }

    return (
        <>
            <RowSplitter height={'15px'}/>
            <MenuItemView
                initialValue={menuItemCandidateToEdit || {}}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}
            >
                <RowSplitter height={'10px'} />
                <PrimaryButton
                    isWide
                    type="submit"
                    isLoading={isLoadingUpdate}
                >
                    {translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.UPDATE_MENU_ITEM)}
                </PrimaryButton>
            </MenuItemView>
            <RowSplitter height={'50px'} />
            <PrimaryButton
                isWide
                isLoading={isLoadingDelete}
                clickHandler={deleteMenuItem}
            >
                <RemoveIcon />
                {translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.DELETE_MENU_ITEM)}
            </PrimaryButton>
        </>
    )
}

export default EditMenuItemPage;