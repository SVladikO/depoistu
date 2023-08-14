import {useCallback, useEffect, useMemo, useState} from "react";
import {useParams} from 'react-router-dom';

import {CategoryTitle, Wrapper} from "./SearchDetails.style";

import {CategoryMenuRow, Company, MenuItem, RowSplitter} from "../../components";

import {useLocalStorage} from "../../utils/hook";
import {BE_API, fetchData} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {CATEGORY_MAPPER} from "../../utils/category";

const SearchDetailsPage = () => {
    let companyId = +useParams().companyId;
    const [companies] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, []);
    const [company, setCompany] = useState(companies?.find(c => c.ID === companyId))
    const [menuItems, setMenuItems] = useState([]);
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(0);

    const scrollTo = category_id => {
        const topOfElement = document.querySelector(`#category_${category_id}`).offsetTop - 108;
        window.scroll({ top: topOfElement, behavior: "smooth" });
    }

    const changeSubCategory = useCallback(category_id => {
        scrollTo(category_id);
        setSelectedSubCategoryId(category_id);
    }, [selectedSubCategoryId]);

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

    const menuItemComponents = useMemo(() => {
        const ids = [];
        return menuItems?.map(mi => {
            const {CATEGORY_ID} = mi;

            if (ids.includes(CATEGORY_ID)) {
                return <MenuItem key={mi.ID} item={mi}/>
            }

            ids.push(CATEGORY_ID);

            return [
                <CategoryTitle
                    id={"category_" + CATEGORY_ID}
                    key={CATEGORY_MAPPER[CATEGORY_ID].title}
                >
                    {CATEGORY_MAPPER[CATEGORY_ID].title.toUpperCase()}
                </CategoryTitle>,
                <MenuItem key={mi.ID} item={mi}/>
            ];
        })?.flat()
    }, [menuItems]);

    return (
        <Wrapper>
            {company && <Company company={company} withMoreInfo/>}
            <CategoryTitle id="menu">{translate(TR.PAGE.COMPANY_DETAILS.MENU_TITLE)}</CategoryTitle>
            <CategoryMenuRow
                menuItems={menuItems}
                selectedOption={selectedSubCategoryId}
                changeSubCategory={changeSubCategory}
            />
            {menuItemComponents}
            <RowSplitter height={'550px'} />
        </Wrapper>
    );
};


export default SearchDetailsPage;