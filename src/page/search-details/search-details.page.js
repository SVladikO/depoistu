import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';

import {Wrapper} from "./search-details.page.style";

import {Company, NotificationLoading, PrimaryButton, NotificationTDB, RowSplitter} from "components";

import CategoryMenuView from '../../page-view/category-menu-view/category-menu-view'

import {ROUTER} from "utils/config";
import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION, TRANSLATION as TR} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {fetchMenu, fetchCompany} from "features/searchDetails/thunks";

const SearchDetailsPage = () => {
    useScrollUp();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let companyId = +useParams().companyId;

    const {menuItems, isMenuLoading, company, isCompanyLoading} = useSelector(state => state.searchDetails)

    useEffect(() => {
        if (company) {
            return
        }

        dispatch(fetchMenu(companyId))
        dispatch(fetchCompany(companyId))
    }, [companyId, dispatch, company])

    const getNotification = translationKey => (
        <NotificationLoading>{translate(translationKey)}</NotificationLoading>
    )

    return (
        <Wrapper>
            {isCompanyLoading && getNotification(TRANSLATION.NOTIFICATION.COMPANY.LOADING_COMPANY)}
            {!isCompanyLoading && company && <Company company={company} withMoreInfo/>}
            {isMenuLoading && getNotification(TRANSLATION.NOTIFICATION.LOADING_MENU)}
            {!isMenuLoading && !!menuItems?.length && <CategoryMenuView menuItems={menuItems} isCompanyVerified={company?.is_verified}/>}
            { (!companyId || !company) && !isCompanyLoading && !isMenuLoading && (
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
            <RowSplitter height={'200px'}/>
        </Wrapper>
    );
};

export default SearchDetailsPage;