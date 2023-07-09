import {useCallback, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import {Divider, Wrapper} from "./SearchDetails.style";

import {CategoryMenuRow, Company, MenuItem} from "../../components";

import {BE_API} from "../../utils/fetch";
import {useLocalStorageFetch} from "../../utils/hook";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";

const SearchDetailsPage = () => {
    let companyId = +useParams().companyId;
    const [companies] = useLocalStorageFetch(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, []);
    const [menuItems, setMenuItems] = useState([]);
    const [selectedSubCategoryId, setSelectedSubCategoryId]= useState(0);

    const changeSubCategory = useCallback(id => setSelectedSubCategoryId(id), [selectedSubCategoryId]);

    useEffect(() => {
        fetch(BE_API.MENU_ITEM.GET_BY_COMPANY_ID(companyId))
            .then(res => res.json())
            .then(data => data.sort((a, b) => a.CATEGORY_ID - b.CATEGORY_ID))
            .then(result => {
                setMenuItems(result)
            });
    }, []);

    return (
        <Wrapper>
            {companies && <Company company={companies.find(c => c.ID === companyId)} withMoreInfo/>}
            <Divider>Menu</Divider>
            <CategoryMenuRow
                menuItems={menuItems}
                selectedCategoryId={selectedSubCategoryId}
                changeCategory={changeSubCategory}
            />
            {menuItems.map((el) => <MenuItem key={el.ID} item={el}/>)}
        </Wrapper>
    );
};

export default SearchDetailsPage;