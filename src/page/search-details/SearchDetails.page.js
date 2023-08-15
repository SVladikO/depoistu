import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import {CategoryTitle, Wrapper} from "./SearchDetails.style";

import {CategoryMenuRow, Company, RowSplitter} from "../../components";

import {useLocalStorage} from "../../utils/hook";
import {BE_API, fetchData} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {translate, TRANSLATION as TR} from "../../utils/translation";

const SearchDetailsPage = () => {
    let companyId = +useParams().companyId;
    const [companies] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, []);
    const [company, setCompany] = useState(companies?.find(c => c.ID === companyId))
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        if (!company) {
            fetchData(BE_API.COMPANY.GET_BY_COMPANY_ID(companyId))
                .then(res => {
                    setCompany(res.body[0]);
                })
        }
    }, [companyId])

    useEffect(() => {
        fetch(BE_API.MENU_ITEM.GET_ONLY_VISIBLE_BY_COMPANY_ID(companyId))
            .then(res => res.json())
            .then(data => data.sort((a, b) => a.CATEGORY_ID - b.CATEGORY_ID))
            .then(menuItems => {
                setMenuItems(menuItems)
            });
    }, [companyId]);

    return (
        <Wrapper>
            {company && <Company company={company} withMoreInfo/>}
            <CategoryTitle id="menu">{translate(TR.PAGE.COMPANY_DETAILS.MENU_TITLE)}</CategoryTitle>
            <CategoryMenuRow
                className="category-menu-row"
                menuItems={menuItems}
            />
            {/*Let's scroll work after click on the last sub category */}
            <RowSplitter height={'550px'}/>
        </Wrapper>
    );
};


export default SearchDetailsPage;