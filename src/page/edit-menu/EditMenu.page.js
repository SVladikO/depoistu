import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";

import {Wrapper} from "./EditMenu.style";

import {
    CategoryMenuRow,
    MenuItem,
    Notification,
    PrimaryButton,
    RowSplitter
} from "../../components";

import {startLoading, stopLoading} from "../../features/request/requestSlice";

import {fetchData} from "../../utils/fetch";
import {BE_API, URL} from "../../utils/config";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";

const EditMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {companyId} = useParams();
    const isLoading = useSelector(state => state.request.value.isLoading);

    const [menuItems, setMenuItems] = useState([]);
    const [requestError, setRequestError] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(menuItems[0]?.CATEGORY_ID)

    const url = BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(companyId);

    useEffect(() => {
        LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU, companyId);
    })

    useEffect(() => {
        dispatch(startLoading());
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(url)
            .then(res => {
                setMenuItems(res.body);
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
        return navigate(URL.EDIT_MENU_ITEM)
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
                <>
                    {menuItemsPerCategory.map(elem => <MenuItem
                        withEditIcon
                        item={elem}
                        key={elem.ID}
                        onEditClick={moveToEditMenuItem(elem)}
                    />)}
                </>
                <Link to={URL.ADD_MENU_ITEM}>
                    <PrimaryButton isWide>Add menu item</PrimaryButton>
                </Link>
            </Wrapper>
        </>
    )
}

export default EditMenu;