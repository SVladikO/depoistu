import {useCallback, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import {Divider, Wrapper} from "./SearchDetails.style";

import {CategoryMenuRow, Company, MenuItem} from "../../components";

import {BE_API, fetchData} from "../../utils/fetch";
import {useLocalStorage} from "../../utils/hook";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";

const SearchDetailsPage = () => {
    let companyId = +useParams().companyId;
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
        fetch(BE_API.MENU_ITEM.GET_BY_COMPANY_ID(companyId))
            .then(res => res.json())
            .then(data => data.sort((a, b) => a.CATEGORY_ID - b.CATEGORY_ID))
            .then(result => {
                setMenuItems(result)
            });
    }, [companyId]);

    return (
        <Wrapper>
            {company && <Company company={company} withMoreInfo/>}
            <Divider id="menu">MENU</Divider>
            <CategoryMenuRow
                menuItems={menuItems}
                selectedCategoryId={selectedSubCategoryId}
                changeCategory={changeSubCategory}
            />
            {
                menuItems
                    .filter(mi => mi.CATEGORY_ID === selectedSubCategoryId)
                    .map(el => <MenuItem key={el.ID} item={el}/>)
            }
        </Wrapper>
    );
};

export default SearchDetailsPage;