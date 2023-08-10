import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {Notification, RowSplitter, SecondaryButton} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "../../assets/icons/remove_icon.svg";

import {URL} from "../../utils/config";
import {fetchData, BE_API} from "../../utils/fetch";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {stopLoading} from "../../features/request/requestSlice";

const EditMenuItemPage = () => {
    useRedirectToSettingPage();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState("");
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
        setIsLoading(true);
        const reqObj = {method: 'put', id: ID, ...values};

        fetchData(BE_API.MENU_ITEM.PUT_UPDATE(), reqObj)
            .then(res => {
                const updatedMenuItem = res.body[0]
                LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, updatedMenuItem);
                setIsMenuItemUpdated(true);
            })
            .catch(e => setRequestError(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    const deleteCompany = () => {
        setIsLoading(true)

        fetchData(BE_API.MENU_ITEM.DELETE(), {method: 'delete', id: menuItemCandidateToEdit.ID})
            .then(() => {
                setIsMenuItemDeleted(true);
            })
            .catch(e => setRequestError(e.body.errorMessage))
            .finally(() => setTimeout(() => setIsLoading(false), 1000))
    }

    if (isMenuItemDeleted) {
        return <Notification.Success message={"Menu item was deleted."} />
    }

    return (
        <>
            {isMenuItemUpdated && <Notification.Success message={"Menu item was updated."} />}
            {requestError && <Notification.Error message={requestError}/>}
            <SecondaryButton onClick={deleteCompany}><RemoveIcon/>{translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.DELETE_MENU_ITEM)}</SecondaryButton>
            <RowSplitter height={'15px'}/>
            <MenuItemView
                isLoading={isLoading}
                initialValue={initialValue}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}
            />
        </>
    )
}

export default EditMenuItemPage;