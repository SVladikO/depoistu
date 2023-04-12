import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {Wrapper} from "./EditMenu.style";

import {
    CategoryMenuRow,
    ContentContainer,
    EditMenuRow,
    Notification,
    PrimaryButton,
    RowSplitter
} from "../../components";

import {startLoading, stopLoading} from "../../features/request/requestSlice";

import {fetchData} from "../../utils/fetch";
import {BE_API, URL} from "../../utils/config";
import {LOCAL_STORAGE_KEY, LocalStorage, redirect} from "../../utils/utils";

const EditMenu = () => {
    const dispatch = useDispatch();
    const {companyId} = useParams();
    const isLoading = useSelector(state => state.request.value.isLoading);

    const [menuItems, setMenuItems] = useState([]);
    const [requestError, setRequestError] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(menuItems[0]?.CATEGORY_ID)

    const url = BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(companyId);

    useEffect(() => {
        dispatch(startLoading());
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(url)
            .then(res => {
                setMenuItems(res);
                setSelectedCategoryId(res[0]?.CATEGORY_ID)
                setTimeout(() => dispatch(stopLoading()), 1000);
            }).catch(e => {
                setTimeout(() => dispatch(stopLoading()), 1000);
                setRequestError(e.message)
            })

    }, [url])

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }


    const menuItemsPerCategory = selectedCategoryId && menuItems.filter(mi => mi.CATEGORY_ID === selectedCategoryId) || [];

    const moveToEditMenuItem = menuItem => () => {
        LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, menuItem);
        return redirect(URL.EDIT_MENU_ITEM)
    }

    return (
        <>
            <Wrapper>
                {menuItems &&
                    <CategoryMenuRow
                        showMenuItemAmount
                        menuItems={menuItems}
                        selectedCategoryId={selectedCategoryId}
                        changeCategory={id => setSelectedCategoryId(id)}
                    />
                }
                <RowSplitter height={'15px'}/>
                <ContentContainer>
                    {menuItemsPerCategory.map(item => <EditMenuRow title={item.NAME} key={item.ID} onEditClick={moveToEditMenuItem(item)} />)}
                </ContentContainer>
                <PrimaryButton isWide>Add menu item</PrimaryButton>
            </Wrapper>
        </>
    )
}

export default EditMenu;