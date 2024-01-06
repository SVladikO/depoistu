import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';

import {Wrapper} from "./SearchDetails.style";

import {Company, NotificationLoading, PrimaryButton, NotificationTDB, RowSplitter} from "components";

import CategoryMenuView from 'page-view/category-menu-view/CategoryMenuView'
import CategoryMenuView2 from 'page-view/category-menu-view-2/CategoryMenuView2'

import {setCompanyId} from '../../features/searchDetails/searchDetailsSlice'

import {ROUTER} from "utils/config";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {BE_API, fetchData} from "utils/fetch";
import {stopLoadingWithDelay} from "utils/utils";
import {publishNotificationEvent} from "utils/event";
import {translate, TRANSLATION, TRANSLATION as TR} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {errorHandler} from "utils/management";
import {fetchCompany, fetchMenu} from "../../features/searchDetails/thunks";

const SearchDetailsPage = () => {
    useScrollUp();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let companyId = +useParams().companyId;

    const {menuItems, isMenuLoading} = useSelector(state => state.searchDetails)

    const [isCompanyExist, setIsCompanyExist] = useState(true);
    const [isLoadingCompany, setIsLoadingCompany] = useState(false);
    const [company, setCompany] = useLocalStorage(LOCAL_STORAGE_KEY.SEARCH_DETAILS_COMPANY)

    useEffect(() => {
        if (!companyId) {
            return
        }

        if (company && company.id === companyId) {
            return;
        }

        dispatch(setCompanyId(companyId))
        setIsLoadingCompany(true)
        const companyLoadingDelay = stopLoadingWithDelay([() => setIsLoadingCompany(false)])

        dispatch(fetchMenu(companyId))

        fetchData(BE_API.COMPANY.GET_BY_COMPANY_ID(companyId))
            .then(res => setCompany(res.body[0]))
            .catch(e => {
                setIsCompanyExist(false)
                errorHandler(e)
            })
            .finally(() => companyLoadingDelay.allow());
    }, [companyId])

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

            {isMenuLoading &&
                <NotificationLoading>{translate(TRANSLATION.NOTIFICATION.LOADING_MENU)}</NotificationLoading>}

            {!isMenuLoading && !!menuItems?.length &&
                    <CategoryMenuView2 menuItems={menuItems} />}
            {!isMenuLoading && !!menuItems?.length &&
                    <CategoryMenuView menuItems={menuItems} />}
            Let's scroll work after click on the last sub category
            <RowSplitter height={'200px'} />
        </Wrapper>
    );
};


export default SearchDetailsPage;