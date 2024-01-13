import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import MenuItemView from "page-view/menu-item/menu-item-view";

import {fetchPostMenuItem} from "features/editMenu/thunks";

import {publishNotificationEvent} from "utils/event";
import {translate, TRANSLATION} from "utils/translation";
import {useRedirectToSettingPage, useScrollUp} from "utils/hook";
import {NotificationLoading} from "../../components";

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
    const dispatch = useDispatch();
    const [initialValues, setInitialValues] = useState(defaultInitialValue)

    const company_id = useSelector(state => state.editMenu.company_id);
    const isAddMenuItemLoading = useSelector(state => state.editMenu.isAddMenuItemLoading);

    const onSubmit = values => {
        scrollUp()
        const requestObj = {...values, company_id};
        dispatch(fetchPostMenuItem(requestObj))
            .then(e => {
                publishNotificationEvent.success(translate(TRANSLATION.NOTIFICATION.MENU_ITEM.WAS_CREATED))
                setInitialValues({...defaultInitialValue, category_id: values.category_id, imageUrl: ''})
            })
    }

    if (isAddMenuItemLoading) {
        return <NotificationLoading />
    }

    return (
        <>
            <MenuItemView
                defaultInitialValue={initialValues}
                onSubmit={onSubmit}
                isLoading={isAddMenuItemLoading}
                submitButtonTitle={translate(TRANSLATION.PAGE.ADD_MENU_ITEM.BUTTON.ADD_MENU_ITEM)}
            />
        </>
    );
}

export default AddMenuItemPage;