import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';

import {Wrapper} from "./SearchDetails.style";

import {Company, NotificationLoading, PrimaryButton, NotificationTDB} from "components";

import CategoryMenuView from 'page-view/category-menu-view/CategoryMenuView'

import {addCompanyIdForSearchDetailsPage} from '../../features/searchDetailsPage/searchDetailsPageSlice'

import {ROUTER} from "utils/config";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {BE_API, fetchData} from "utils/fetch";
import {stopLoadingWithDelay} from "utils/utils";
import {publishNotificationEvent} from "utils/event";
import {translate, TRANSLATION, TRANSLATION as TR} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

const SearchDetailsPage = () => {
    useScrollUp();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let companyId = +useParams().companyId;

    const [isCompanyExist, setIsCompanyExist] = useState(true);
    const [isLoadingMenu, setIsLoadingMenu] = useState(false);
    const [isLoadingCompany, setIsLoadingCompany] = useState(false);

    const [company, setCompany] = useLocalStorage(LOCAL_STORAGE_KEY.SEARCH_DETAILS_COMPANY)
    const [menuItems, setMenuItems] = useLocalStorage(LOCAL_STORAGE_KEY.SEARCH_DETAILS_MENU);

    useEffect(() => {
        if (companyId) {
            dispatch(addCompanyIdForSearchDetailsPage(companyId))
        }
    })

    useEffect(() => {
        if (!companyId) {
            setIsCompanyExist(false)
            return
        }

        if (company && company.id === companyId) {
            return;
        }
        if (isLoadingCompany) {
            return;
        }

        setIsLoadingCompany(true)
        const companyLoadingDelay = stopLoadingWithDelay([() => setIsLoadingCompany(false)])


        fetchData(BE_API.COMPANY.GET_BY_COMPANY_ID(companyId))
            .then(res => {
                setCompany(res.body[0]);
            })
            .catch(e => {
                setIsCompanyExist(false)
                publishNotificationEvent.error(e.body.errorMessage)
            })
            .finally(() => companyLoadingDelay.allow());
    }, [companyId])

    useEffect(() => {
        if (!companyId) {
            return
        }

        if (menuItems && company.id === companyId) {
            return
        }
        if (isLoadingMenu) {
            return;
        }

        setIsLoadingMenu(true);
        const menuLoadingDelay = stopLoadingWithDelay([() => setIsLoadingMenu(false)]);

        fetchData(BE_API.MENU_ITEM.GET_ONLY_VISIBLE_BY_COMPANY_ID(companyId))
            .then(res => res.body.sort((a, b) => a.categoryId - b.categoryId))
            .then(menuItems => {
                setMenuItems(menuItems)
                if (!menuItems.length) {
                    publishNotificationEvent.warning(translate(TR.PAGE.COMPANY_DETAILS.MENU_PROBLEM));
                }
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
            .finally(() => menuLoadingDelay.allow());

    }, [companyId]);

    if (!isCompanyExist) {
        return (
            <NotificationTDB title={translate(TR.PAGE.COMPANY_DETAILS.COMPANY_DOESNT_EXIST)}>
                <PrimaryButton isWide clickHandler={() => {

                    // We delete these data for case when
                    // company was deleted between
                    // customer found list of companies per city
                    // and
                    // open company
                    LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_CITY_ID)
                    LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_REGION_ID)
                    LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT)

                    navigate(ROUTER.SEARCH.URL)
                }}>
                    {translate(TR.GO_TO_A_SEARCH_PAGE)}
                </PrimaryButton>
            </NotificationTDB>
        )
    }

    return (
        <Wrapper>
            {isLoadingCompany &&
                <NotificationLoading>{translate(TRANSLATION.NOTIFICATION.COMPANY.LOADING_COMPANY)}</NotificationLoading>}
            {!isLoadingCompany && company && <Company company={company} withMoreInfo/>}

            {isLoadingMenu &&
                <NotificationLoading>{translate(TRANSLATION.NOTIFICATION.LOADING_MENU)}</NotificationLoading>}

            {!isLoadingMenu && !!menuItems?.length && (
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