import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Notification, RowSplitter, SecondaryButton} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {getScheduleAsString, LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {BE_API, URL} from "../../utils/config";
import {fetchData} from "../../utils/fetch";

import {URL} from "../../utils/config";
import {fetchData, BE_API} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItemCandidateToEdit = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {ID, NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItemCandidateToEdit;
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [isMenuItemDeleted, setIsMenuItemDeleted] = useState(false);
    const [isMenuItemUpdated, setIsMenuItemUpdated] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!menuItemCandidateToEdit && URL.EDIT_MENU) {
        return navigate(URL.SETTING)
    }

    const initialValue = {
        name: NAME,
        price: PRICE,
        description: DESCRIPTION,
        cookingTime: COOKING_TIME,
        size: SIZE,
        imageURL: IMAGE_URL
    }

    const onSubmit = values => {
        setIsLoading(true);
        const {name, price, description, cookingTime, size, imageURL } = values;
        const reqObj = {method: 'put', id: ID, name, price, description, cookingTime, size, imageURL};

        fetchData(BE_API.MENU_ITEM.PUT_UPDATE(), reqObj)
            .then(res => {
                const updatedMenuItem = res.body[0]
                LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, updatedMenuItem);
                setIsMenuItemUpdated(true);
            })
            .catch(res => setRequestError(res.status + " Error: " + res.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    const deleteCompany = () => {
        setIsLoading(true)

        fetchData(BE_API.MENU_ITEM.DELETE(), {method: 'delete', id: menuItemCandidateToEdit.ID})
            .then(() => {
                setIsMenuItemDeleted(true);
            })
            .catch(res => {
                setRequestError(res.status + " Error: " + res.body.errorMessage)
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
            <SecondaryButton onClick={deleteCompany}><RemoveIcon/> Delete</SecondaryButton>
            <RowSplitter height={'15px'}/>
            <MenuItemView
                initialValue={initialValue}
                onSubmit={onSubmit}
            />
        </>
    )
}

export default EditMenuItemPage;