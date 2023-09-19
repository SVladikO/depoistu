import React, {useState} from "react";

import {PrimaryButton, RowSplitter} from "components";
import MenuItemView from "page-view/menu-item/menu-item-view";

import {fetchData, BE_API} from "utils/fetch";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";

const AddMenuItemPage = () => {
    useRedirectToSettingPage();
    useScrollUp();
    const companyId = LocalStorage.get(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU);

    const [isLoading, setIsLoading] = useState(false);

    const initialValue = {
        name: '',
        price: '',
        categoryId: 1,
        description: '',
        cookingTime: '',
        size: '',
        imageUrl: ''
    }

    const onSubmit = values => {
        setIsLoading(true);

        const requestObj = {
            ...values,
            companyId,
        }

        fetchData(BE_API.MENU_ITEM.POST_CREATE(), requestObj)
            .then(() => publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_CREATED)))
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            <MenuItemView
                initialValue={initialValue}
                onSubmit={onSubmit}
            >
                <>
                    <RowSplitter height="10px" />
                    <PrimaryButton
                        isWide
                        type="submit"
                        isLoading={isLoading}
                    >
                        {translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.ADD_MENU_ITEM)}
                    </PrimaryButton>
                </>

            </MenuItemView>
        </>
    );
}

export default AddMenuItemPage;