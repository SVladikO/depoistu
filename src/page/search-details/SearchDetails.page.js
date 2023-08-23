import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {CategoryTitle, Wrapper} from "./SearchDetails.style";

import {Company, NotificationLoading, RowSplitter} from "../../components";

import CategoryMenuView from '../../page-view/category-menu-view/CategoryMenuView'
import {useLocalStorage} from "../../utils/hook";
import {BE_API, fetchData} from "../../utils/fetch";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {publishNotificationEvent} from "../../utils/event";


const SearchDetailsPage = () => {
    let companyId = +useParams().companyId;
    const [isLoadingMenu, setIsLoadingMenu] = useState(false);
    const [isLoadingCompany, setIsLoadingCompany] = useState(false);
    const [companies] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, []);
    const [company, setCompany] = useState(companies?.find(c => c.ID === companyId))
    const [menuItems, setMenuItems] = useState();


    useEffect(() => {
        if (!company) {
            setIsLoadingCompany(true)
            fetchData(BE_API.COMPANY.GET_BY_COMPANY_ID(companyId))
                .then(res => {
                    setCompany(res.body[0]);
                })
                .catch(e => publishNotificationEvent.error(e.body.errorMessage))
                .finally(() => setIsLoadingCompany(false));
        }
    }, [companyId])

    useEffect(() => {
        setIsLoadingMenu(true)
        fetch(BE_API.MENU_ITEM.GET_ONLY_VISIBLE_BY_COMPANY_ID(companyId))
            .then(res => res.json())
            .then(data => data.sort((a, b) => a.CATEGORY_ID - b.CATEGORY_ID))
            .then(menuItems => {
                setMenuItems(menuItems)
                if (!menuItems.length) {
                    publishNotificationEvent.warning(translate(TR.PAGE.COMPANY_DETAILS.MENU_PROBLEM));
                }
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => setIsLoadingMenu(false));
    }, [companyId]);

    return (
        <Wrapper>
            {isLoadingCompany && <NotificationLoading/>}
            {company && <Company company={company} withMoreInfo/>}

            <CategoryTitle id="menu">{translate(TR.PAGE.COMPANY_DETAILS.MENU_TITLE)}</CategoryTitle>
            {isLoadingMenu && <NotificationLoading/>}

            {menuItems?.length && (
                <CategoryMenuView
                    className="category-menu-row"
                    menuItems={menuItems}
                />
            )
            }

            {/*Let's scroll work after click on the last sub category */}
            <RowSplitter height={'550px'}/>
        </Wrapper>
    );
};


export default SearchDetailsPage;