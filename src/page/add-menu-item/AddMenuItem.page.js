import React, {useState} from "react";

import {FetchButton, Notification} from "../../components";
import MenuItemView from "../../page-view/menu-item/menu-item-view";

import {getParam} from "../../utils/utils";
import {fetchData, BE_API} from "../../utils/fetch";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";

const AddMenuItemPage = () => {
    useRedirectToSettingPage();
    const categoryId = +getParam(`categoryId`);
    const companyId = getParam(`companyId`)

    const [isLoading, setIsLoading] = useState(false);
    const [isMenuItemCreated, setIsMenuItemCreated] = useState(false);
    const [requestError, setRequestError] = useState("");

    const initialValue = {
        name: '',
        price: '',
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

        setRequestError('')
        fetchData(BE_API.MENU_ITEM.POST_CREATE(), requestObj)
            .then(() => {
                setIsMenuItemCreated(true);
            })
            .catch(e => setRequestError(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            <MenuItemView
                initialValue={initialValue}
                onSubmit={onSubmit}
            >
                <>
                    {requestError && <Notification.Error message={requestError}/>}
                    {isMenuItemCreated && <Notification.Success message={"Menu item was created."}/>}
                    <FetchButton
                        isWide
                        type="submit"
                        isLoading={isLoading}
                    >
                        {translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.ADD_MENU_ITEM)}
                    </FetchButton>
                </>

            </MenuItemView>
        </>
    );
}

export default AddMenuItemPage;