import {useCallback, useEffect, useMemo, useState} from "react";
import {useParams} from 'react-router-dom';

import {CategoryTitle, Wrapper} from "./SearchDetails.style";

import {CategoryMenuRow, Company, MenuItem, RowSplitter} from "../../components";

import {useLocalStorage} from "../../utils/hook";
import {BE_API, fetchData} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {CATEGORY_MAPPER} from "../../utils/category";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const CATEGORY_ROW_HEIGHT = 120;

const SearchDetailsPage = () => {
    let companyId = +useParams().companyId;
    const [companies] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, []);
    const [company, setCompany] = useState(companies?.find(c => c.ID === companyId))
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);

    const onScrollPage = () => {
        const categoryTitles = document.getElementsByClassName(CATEGORY_TITLE_CLASS_NAME)
        Object.values(categoryTitles).map(ct => {
                const y = ct.offsetTop - window.scrollY - CATEGORY_ROW_HEIGHT;
                if (y < 120 && y > 20) {
                    const candidateCategoryId = +(ct.id.split('_')[1])

                    if (candidateCategoryId !== selectedCategoryId) {
                        setSelectedCategoryId(candidateCategoryId)
                    }
                }
            }
        )
    }

    useEffect(() => {
        document.addEventListener("scroll", onScrollPage)

        return () => {
            document.removeEventListener("scroll", onScrollPage);
        }
    }, [])

    const scrollTo = category_id => {
        const topOfElement = document.querySelector(`#category_${category_id}`).offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: topOfElement, behavior: "smooth"});
    }

    /**
     * Our `window.scroll` is blocked by `document.addEventListener("scroll", onScrollPage)`.
     * After click on category we publish scroll which trigger scroll listener.
     * As a solutions I propose to delete listener before `window.scroll`
     * And add it with small delay.
     *
     */
    const changeCategory = useCallback(category_id => {
        scrollTo(category_id);
        setSelectedCategoryId(category_id);
    }, [selectedCategoryId]);

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

    const AllMenuItems = useMemo(() => {
        const ids = [];
        return menuItems?.map(mi => {
            const {CATEGORY_ID} = mi;

            if (ids.includes(CATEGORY_ID)) {
                return <MenuItem key={mi.ID} item={mi}/>
            }

            ids.push(CATEGORY_ID);

            return [
                <CategoryTitle
                    className={CATEGORY_TITLE_CLASS_NAME}
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
                className="category-menu-row"
                menuItems={menuItems}
                selectedCategoryId={selectedCategoryId}
                changeCategory={changeCategory}
            />
            {AllMenuItems}
            {/*Let's scroll work after click on the last sub category */}
            <RowSplitter height={'550px'}/>
        </Wrapper>
    );
};


export default SearchDetailsPage;