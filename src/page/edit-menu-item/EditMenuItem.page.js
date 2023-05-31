import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Notification, RowSplitter, SecondaryButton} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {BE_API, URL} from "../../utils/config";
import {fetchData} from "../../utils/fetch";


const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItemCandidateToEdit = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItemCandidateToEdit;
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [isMenuItemDeleted, setIsMenuItemDeleted] = useState(false);

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
        console.log(values);
    }

    const deleteCompany = () => {
        setIsLoading(true)

        fetchData(BE_API.DELETE_MENU_ITEM(), {method: 'delete', id: menuItemCandidateToEdit.ID})
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