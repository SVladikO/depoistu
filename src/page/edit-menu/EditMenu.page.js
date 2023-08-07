import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";

import {Wrapper, CompanyDetails} from "./EditMenu.style";

import {
    CategoryMenuRow,
    MenuItem,
    Notification,
    PrimaryButton,
    RowSplitter
} from "../../components";

import {startLoading, stopLoading} from "../../features/request/requestSlice";

import {URL} from "../../utils/config";
import {BE_API} from '../../utils/fetch'
import {fetchData} from "../../utils/fetch";
import {useLocalStorage, useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {CITY_TRANSLATION_IDS} from "../../utils/cities";

const EditMenu = () => {
    useRedirectToSettingPage();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {companyId} = useParams();
    const isLoading = useSelector(state => state.request.value.isLoading);
    const customerCompanies = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const currentCompany = customerCompanies.find((c => c.ID === +companyId));
    const [menuItems, setMenuItems] = useState([]);
    const [requestError, setRequestError] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState();

    const url = BE_API.MENU_ITEM.GET_BY_COMPANY_ID(companyId);

    useEffect(() => {
        LocalStorage.set(LOCAL_STORAGE_KEY.COMPANY_ID_FOR_EDIT_MENU, companyId);
    })

    useEffect(() => {
        dispatch(startLoading());
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(url)
            .then(res => {
                setMenuItems(res.body);
                setSelectedCategoryId(res.body[0]?.CATEGORY_ID)
                setTimeout(() => dispatch(stopLoading()), 1000);
            }).catch(e => {
                setTimeout(() => dispatch(stopLoading()), 1000);
                setRequestError(e.body.message)
            })
    }, [url,companyId])

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    const menuItemsPerCategory = (selectedCategoryId && menuItems.filter(mi => mi.CATEGORY_ID === selectedCategoryId)) || [];

    const moveToEditMenuItem = menuItem => () => {
        LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, menuItem);
        return navigate(URL.EDIT_MENU_ITEM)
    }

    return (
        <>
            {currentCompany &&
               <CompanyDetails>
                   {currentCompany.NAME},
                   {translate(CITY_TRANSLATION_IDS[currentCompany.CITY_ID])},
                   {currentCompany.STREET}
               </CompanyDetails>
            }
            <Wrapper>
                {menuItems &&
                    <CategoryMenuRow
                        showAllCategories
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
                <Link to={`${URL.ADD_MENU_ITEM}?categoryId=${selectedCategoryId}&companyId=${companyId}`}>
                    <PrimaryButton isWide>{translate(TRANSLATION.PAGE.EDIT_MENU.BUTTON.ADD_MENU_ITEM)}</PrimaryButton>
                </Link>
            </Wrapper>
        </>
    )
}

export default EditMenu;