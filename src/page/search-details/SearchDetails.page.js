import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Wrapper} from "./SearchDetails.style";

import {Company, NotificationLoading} from "../../components";

import CategoryMenuView from '../../page-view/category-menu-view/CategoryMenuView'

import {BE_API, fetchData} from "../../utils/fetch";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {publishNotificationEvent} from "../../utils/event";
import {stopLoadingWithDelay} from "../../utils/utils";
import {useScrollUp} from "../../utils/hook";

const SearchDetailsPage = () => {
    useScrollUp();
    let companyId = +useParams().companyId;
    const [isLoadingMenu, setIsLoadingMenu] = useState(false);
    const [isLoadingCompany, setIsLoadingCompany] = useState(false);
    const [company, setCompany] = useState()
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        setIsLoadingCompany(true)

        const companyLoadingDelay = stopLoadingWithDelay([() => setIsLoadingCompany(false)])

        fetchData(BE_API.COMPANY.GET_BY_COMPANY_ID(companyId))
            .then(res => {
                setCompany(res.body[0]);
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => companyLoadingDelay.allow());
    }, [companyId])

    useEffect(() => {
        setIsLoadingMenu(true);
        const menuLoadingDelay = stopLoadingWithDelay([() => setIsLoadingMenu(false)]);
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
            .finally(() => menuLoadingDelay.allow());
    }, [companyId]);

    return (
        <Wrapper>
            {isLoadingCompany && <NotificationLoading>Loading company ...</NotificationLoading>}
            {!isLoadingCompany && company && <Company company={company} withMoreInfo/>}

            {isLoadingMenu && <NotificationLoading>Loading menu ... </NotificationLoading>}

            {!isLoadingMenu && menuItems?.length && (
                <>
                    <CategoryMenuView
                        className="category-menu-row"
                        menuItems={menuItems}
                    />
                </>
            )
            }
            {/*Let's scroll work after click on the last sub category */}
        </Wrapper>
    );
};


export default SearchDetailsPage;