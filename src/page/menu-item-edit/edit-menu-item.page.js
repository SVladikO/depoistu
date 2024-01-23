import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {RowSplitter, SecondaryButton} from "components";
import MenuItemView from "../../page-view/menu-item-view/menu-item-view";
import {ReactComponent as RemoveIcon} from "assets/icons/remove_icon.svg";

import {fetchPutMenuItem, fetchDeleteMenuItem} from "features/editMenu/thunks";

import {URL} from "utils/config";
import {translate, TRANSLATION} from "utils/translation";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";

// We have problems with data. Add menu item default for number 0, string ''
// but when we edit we see 0. And it's a problem for edit menu item price as validation block it.
const convertNumberIn = number => +number || undefined;
const convertNumberOut = number => +number || 0;

const EditMenuItemPage = () => {
    useRedirectToSettingPage();
    useScrollUp();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editMenuItemCandidate = useSelector(state => state.editMenu.editMenuItemCandidate);
    const isLoadingUpdate = useSelector(state => state.editMenu.isLoadingUpdateEditMenuItem);
    const isLoadingDelete = useSelector(state => state.editMenu.isLoadingDeleteMenuItem);

    //Bugfix.  When we inserted data trough sql we put null which now in input which can't handle null.
    const price_1 = convertNumberIn(editMenuItemCandidate.price_1);
    const price_2 = convertNumberIn(editMenuItemCandidate.price_2);
    const price_3 = convertNumberIn(editMenuItemCandidate.price_3)
    const size_1 = editMenuItemCandidate.size_1 || ''
    const size_2 = editMenuItemCandidate.size_2 || ''
    const size_3 = editMenuItemCandidate.size_3 || ''

    const editMenuItem = {...editMenuItemCandidate, price_1, price_2, price_3, size_1, size_2, size_3};

    if (!editMenuItem) {
        return navigate(URL.SETTING)
    }

    const onSubmit = values => {
        const reqObj = {
            method: 'put',
            id: editMenuItem.id,
            ...values,
            price_1: convertNumberOut(values.price_1),
            price_2: convertNumberOut(values.price_2),
            price_3: convertNumberOut(values.price_3)
        };

        dispatch(fetchPutMenuItem(reqObj))
    }

    const onClickDeleteMenuItem = () => {
        dispatch(fetchDeleteMenuItem(editMenuItemCandidate.id))
            .then(() => {
                setTimeout(() => navigate(URL.EDIT_MENU), 0)
            })
    }

    return (
        <>
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