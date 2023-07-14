import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {Notification, RowSplitter, SecondaryButton} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

import {URL} from "../../utils/config";
import {fetchData, BE_API} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {useScrollUp} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";

const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItemCandidateToEdit = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {ID, NAME, PRICE, CATEGORY_ID, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItemCandidateToEdit;
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [isMenuItemDeleted, setIsMenuItemDeleted] = useState(false);
    const [isMenuItemUpdated, setIsMenuItemUpdated] = useState(false);

    useScrollUp();

    if (!menuItemCandidateToEdit && URL.EDIT_MENU) {
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
            .catch(res => setRequestError(res.body.message))
            .finally(() => setIsLoading(false))
    }

    const deleteCompany = () => {
        setIsLoading(true)

        fetchData(BE_API.MENU_ITEM.DELETE(), {method: 'delete', id: menuItemCandidateToEdit.ID})
            .then(() => {
                setIsMenuItemDeleted(true);
            })
            .catch(res => {
                setRequestError(res.body.message)
            })
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return <Notification.Loading/>;
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
                initialValue={initialValue}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.EDIT_MENU_ITEM)}
            />
        </>
    )
}

export default EditMenuItemPage;