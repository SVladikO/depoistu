import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {FetchButton, Notification, RowSplitter} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "../../assets/icons/remove_icon.svg";

import {URL} from "../../utils/config";
import {fetchData, BE_API} from "../../utils/fetch";
import {useRedirectToSettingPage, useScrollUp} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

const EditMenuItemPage = () => {
    useRedirectToSettingPage();
    useScrollUp()
    const navigate = useNavigate();
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [requestUpdateError, setRequestUpdateError] = useState("");
    const [requestDeleteError, setRequestDeleteError] = useState("");
    const [isMenuItemDeleted, setIsMenuItemDeleted] = useState(false);
    const [isMenuItemUpdated, setIsMenuItemUpdated] = useState(false);
    const menuItemCandidateToEdit = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {ID, NAME, PRICE, CATEGORY_ID, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItemCandidateToEdit || {};

    if (!menuItemCandidateToEdit) {
        return navigate(URL.SETTING)
    }

    const initialValue = {
        name: NAME,
        price: PRICE,
        category_id: CATEGORY_ID,
        description: DESCRIPTION,
        cookingTime: COOKING_TIME,
        size: SIZE,
        image_url: IMAGE_URL
    }
    const onSubmit = values => {
        setIsLoadingUpdate(true);
        setRequestUpdateError('')
        setRequestDeleteError('')

        const reqObj = {method: 'put', id: ID, ...values};

        fetchData(BE_API.MENU_ITEM.PUT_UPDATE(), reqObj)
            .then(res => {
                const updatedMenuItem = res.body[0]
                LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, updatedMenuItem);
                setIsMenuItemUpdated(true);
            })
            .catch(e => setRequestUpdateError(e.body.errorMessage))
            .finally(() => setIsLoadingUpdate(false))
    }

    const deleteCompany = () => {
        setIsLoadingDelete(true)
        setRequestUpdateError('')
        setRequestDeleteError('')

        fetchData(BE_API.MENU_ITEM.DELETE(), {method: 'delete', id: menuItemCandidateToEdit.ID})
            .then(() => {
                setIsMenuItemDeleted(true);
            })
            .catch(e => setRequestDeleteError(e.body.errorMessage))
            .finally(() => setTimeout(() => setIsLoadingDelete(false), 1000))
    }

    if (isMenuItemDeleted) {
        return <Notification.Success message={"Menu item was deleted."}/>
    }

    return (
        <>


            <RowSplitter height={'15px'}/>
            <MenuItemView
                initialValue={initialValue}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}
            >
                <>
                    {isMenuItemUpdated && <Notification.Success message={"Menu item was updated."}/>}
                    {requestUpdateError && <Notification.Error message={requestUpdateError}/>}
                    <FetchButton
                        isWide
                        type="submit"
                        isLoading={isLoadingUpdate}
                    >
                        {translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.ADD_MENU_ITEM)}
                    </FetchButton>
                    <RowSplitter height={'25px'}/>
                    {requestDeleteError && <Notification.Error message={requestDeleteError}/>}
                    <RowSplitter height={'25px'}/>
                    <FetchButton
                        isWide
                        isLoading={isLoadingDelete}
                        clickHandler={deleteCompany}
                    >
                        <RemoveIcon/>
                        {translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.DELETE_MENU_ITEM)}
                    </FetchButton>
                </>

            </MenuItemView>
        </>
    )
}

export default EditMenuItemPage;