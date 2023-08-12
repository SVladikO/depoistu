import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {Divider, Wrapper} from "./SearchDetails.style";
import {startLoading, stopLoading} from "../../features/request/requestSlice";

import {CategoryMenuRow, Company, MenuItem, Notification} from "../../components";

import {useLocalStorage} from "../../utils/hook";
import {BE_API, fetchData} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {CATEGORY_MAPPER} from "../../utils/category";


const SearchDetailsPage = () => {
    let companyId = +useParams().companyId;
    const dispatch = useDispatch();
    const [requestError, setRequestError] = useState('');
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [companies] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, []);
    const [company, setCompany] = useState(companies?.find(c => c.ID === companyId))
    const [menuItems, setMenuItems] = useState([]);
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(0);

    const changeSubCategory = useCallback(id => setSelectedSubCategoryId(id), [selectedSubCategoryId]);


    useEffect(() => {
        if (!company) {
            fetchData(BE_API.COMPANY.GET_BY_COMPANY_ID(companyId))
                .then(res => {
                    setCompany(res.body[0]);
                })
        }
    }, [companyId])

    useEffect(() => {
        dispatch(startLoading());
        fetch(BE_API.MENU_ITEM.GET_ONLY_VISIBLE_BY_COMPANY_ID(companyId))
            .then(res => res.json())
            .then(data => data.sort((a, b) => a.CATEGORY_ID - b.CATEGORY_ID))
            .then(result => {
                setMenuItems(result)
                setTimeout(() => dispatch(stopLoading()), 1000)
            })
            .catch(e => setRequestError(e.message))
            .finally(() => setTimeout(() => dispatch(stopLoading()), 1000))

    }, [companyId]);


    const menuItemComponents = useMemo(() => {
        const ids = [];
        return menuItems?.map(el => {
            const {CATEGORY_ID} = el;

            if (ids.includes(CATEGORY_ID)) {
                return <MenuItem key={el.ID} item={el}/>
            }

            ids.push(CATEGORY_ID);

            return [
                <Divider
                    id={CATEGORY_ID}
                    key={CATEGORY_MAPPER[CATEGORY_ID].title}
                >
                    {CATEGORY_MAPPER[CATEGORY_ID].title.toUpperCase()}
                </Divider>,
                <MenuItem key={el.ID} item={el}/>
            ];
        })?.flat()
    }, [menuItems]);

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    return (
        <Wrapper>
            {company && <Company company={company} withMoreInfo/>}
            {requestError && <Notification.Error message={requestError}/>}
            <Divider id="menu">{translate(TR.PAGE.COMPANY_DETAILS.MENU_TITLE)}</Divider>
            <CategoryMenuRow
                menuItems={menuItems}
                selectedOption={selectedSubCategoryId}
                changeCategory={changeSubCategory}
            />
            {menuItemComponents}
        </Wrapper>
    );
};


export default SearchDetailsPage;