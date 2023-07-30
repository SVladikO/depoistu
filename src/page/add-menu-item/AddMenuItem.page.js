import React, {useState} from "react";

import {Notification} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";

import {getParam} from "../../utils/utils";
import {fetchData, BE_API} from "../../utils/fetch";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";

const AddMenuItemPage = () => {
    useRedirectToSettingPage();
    const categoryId = getParam(`categoryId`);
    const companyId = getParam(`companyId`)

    const [isLoading, setIsLoading] = useState(false);
    const [isMenuItemCreated, setIsMenuItemCreated] = useState(false);
    const [requestError, setRequestError] = useState("");

    const initialValue = {
        name: '',
        price: '',
        category: '',
        category_id: categoryId,
        description: '',
        cookingTime: '',
        size: '',
        image_url: ''
    }

    const onSubmit = values => {
        console.log(values);

        setIsLoading(true);
        setIsMenuItemCreated(false)

        const requestObj = {
            ...values,
            company_id: companyId,
        }

        fetchData(BE_API.MENU_ITEM.POST_CREATE(), requestObj)
            .then(() => {
                setIsMenuItemCreated(true);
            })
            .catch(res => setRequestError(res.body.message))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    return (
        <>
            {isMenuItemCreated && <Notification.Success message={"Menu item was created."}/>}
            <MenuItemView
                initialValue={initialValue}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.ADD_MENU_ITEM)}
            />
        </>
    );
}

export default AddMenuItemPage;