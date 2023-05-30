import React, {useState} from "react";

import {Notification} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";
import {fetchData} from "../../utils/fetch";
import {BE_API} from "../../utils/config";
import {getParam} from "../../utils/utils";

const AddMenuItemPage = () => {
    const categoryId = getParam(`categoryId`)
    const companyId = getParam(`companyId`)

    const [isLoading, setIsLoading] = useState(false);
    const [isMenuItemCreated, setIsMenuItemCreated] = useState(false);
    const [requestError, setRequestError] = useState("");

    const initialValue = {
        name: '',
        price: '',
        description: '',
        cookingTime: '',
        size: '',
        imageUrl: ''
    }

    const onSubmit = values => {
        console.log(values);

        setIsLoading(true);
        setIsMenuItemCreated(false)

        const requestObj = {
            ...values,
            category_id: categoryId,
            company_id: companyId,
        }

        fetchData(BE_API.POST_MENU_ITEM(), requestObj)
            .then(() => {
                setIsMenuItemCreated(true);
            })
            .catch(res => setRequestError(res.status + " Error: " + res.body.errorMessage))
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
            />
        </>
    );
}

export default AddMenuItemPage;