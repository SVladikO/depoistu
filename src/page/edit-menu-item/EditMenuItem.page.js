import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {RowSplitter, SecondaryButton} from "components";
import MenuItemView from "page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "assets/icons/remove_icon.svg";

import {fetchPutMenuItem, fetchDeleteMenuItem} from "features/editMenu/thunks";

import {URL} from "utils/config";
import {translate, TRANSLATION} from "utils/translation";
import {publishNotificationEvent} from "utils/event";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";

const EditMenuItemPage = () => {
    useRedirectToSettingPage();
    useScrollUp();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editMenuItemCandidate = useSelector(state => state.editMenu.editMenuItemCandidate);
    const isLoadingUpdate = useSelector(state => state.editMenu.isUpdateMenuItemLoading);
    const isLoadingDelete = useSelector(state => state.editMenu.isDeleteMenuItemLoading);

    //Bugfix.  When we inserted data trough sql we put null which now in input which can't handle null.
    const {
        price_1 = '',
        price_2 = '',
        price_3 = '',
        size_1 = '',
        size_2 = '',
        size_3 = ''
    } = editMenuItemCandidate;

    const editMenuItem = {...editMenuItemCandidate, price_1, price_2, price_3, size_1, size_2, size_3}

    if (!editMenuItem) {
        return navigate(URL.SETTING)
    }

    const onSubmit = values => {
        const reqObj = {
            method: 'put',
            id: editMenuItem.id,
            ...values
        };

        dispatch(fetchPutMenuItem(reqObj))
            .then(() => {
                    publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_UPDATED))
                    setTimeout(() => navigate(URL.EDIT_MENU), 0);
                }
            )
    }

    const onClickDeleteMenuItem = () => {
        dispatch(fetchDeleteMenuItem(editMenuItemCandidate.id))
            .then(() => {
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_DELETED))
                setTimeout(() => navigate(URL.EDIT_MENU), 0)
            })
    }

    return (
        <>
            <h1>{editMenuItemCandidate.id}</h1>
            <MenuItemView
                defaultInitialValue={editMenuItem}
                isLoading={isLoadingUpdate}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.UPDATE_MENU_ITEM)}
            />
            <RowSplitter height={'50px'}/>
            <SecondaryButton
                isWide
                isLoading={isLoadingDelete}
                clickHandler={onClickDeleteMenuItem}
                withPadding
            >
                <RemoveIcon/>
                {translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.DELETE_MENU_ITEM)}
            </SecondaryButton>
        </>
    )
}

export default EditMenuItemPage;