import React, {useState} from "react";

import {NotificationLoading, PrimaryButton, RowSplitter} from "components";
import MenuItemView from "page-view/menu-item/menu-item-view";

import {fetchData, BE_API} from "utils/fetch";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";

const defaultInitialValue = {
    name: '',
    description: '',
    size_1: '',
    price_1: '',
    size_2: '',
    price_2: '',
    size_3: '',
    price_3: '',
    imageUrl: ''
}

const AddMenuItemPage = () => {
    useRedirectToSettingPage();
    const scrollUp = useScrollUp();

    const companyId = LocalStorage.get(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU);
    const [isLoading, setIsLoading] = useState(false);
    const [initialValues, setInitialValues] = useState(defaultInitialValue)

    const onSubmit = values => {
        setIsLoading(true);

        const requestObj = {
            ...values,
            companyId,
        }

        fetchData(BE_API.MENU_ITEM.POST_CREATE(), requestObj)
            .then(() => {
                scrollUp();
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_CREATED))
                setInitialValues({...defaultInitialValue, categoryId: values.categoryId})
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return <NotificationLoading />
    }

    return (
        <>
            <MenuItemView
                defaultInitialValue={initialValues}
                onSubmit={onSubmit}
            >
                <>
                    <RowSplitter height="10px"/>
                    <PrimaryButton
                        isWide
                        type="submit"
                        isLoading={isLoading}
                        withPadding
                    >
                        {translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.ADD_MENU_ITEM)}
                    </PrimaryButton>
                </>

            </MenuItemView>
        </>
    );
}

export default AddMenuItemPage;