import React from "react";
import {useNavigate} from "react-router-dom";

import {RowSplitter, SecondaryButton} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {URL} from "../../utils/config";


const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItem = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItem;

    if (!menuItem && URL.EDIT_MENU) {
        return navigate(URL.SETTING)
    }

    console.log(2222, IMAGE_URL)

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

    return (
        <>
            <SecondaryButton><RemoveIcon/> Delete</SecondaryButton>
            <RowSplitter height={'15px'}/>
            <MenuItemView
                initialValue={initialValue}
                onSubmit={onSubmit}
            />
        </>
    )
}

export default EditMenuItemPage;