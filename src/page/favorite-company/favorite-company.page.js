import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import {Company, NotificationTDB, PrimaryButton} from "../../components";

import SingInSingUpView from "../../page-view/sing-in-sing-up-view/sing-in-sing-up-view";

import {initFavoriteCompanies} from "features/favorite-company/favoriteComapnySlice";
import {setCompanyId} from "features/searchDetails/searchDetailsSlice";

import {useScrollUp} from "utils/hook";
import {ROUTER, URL} from 'utils/config'
import {translate, TRANSLATION} from "utils/translation";
import {BE_API, fetchData, errorHandler} from "utils/fetch";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";

const FavoriteCompanyPage = () => {
    useScrollUp();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const customer = useSelector(state => state.customer.value)
    const favoriteCompany = useSelector(state => state.favoriteCompany.value)

    useEffect(() => {
        if (!customer) {
            return;
        }

        if (favoriteCompany) {
            return
        }

        fetchData(BE_API.FAVORITE_COMPANY.GET(customer.id))
            .then(res => {
                dispatch(initFavoriteCompanies(res.body))
            })
            .catch(errorHandler)
    })

    return (
        <>
            <SingInSingUpView backUrl={URL.FAVORITE}/>
            {(customer && !favoriteCompany?.length) && (
                <NotificationTDB
                    title={translate(TRANSLATION.PAGE.FAVORITE.NO_CONTENT)}
                >
                    <PrimaryButton
                        isWide
                        clickHandler={() => navigate(ROUTER.SEARCH.URL)}
                    >
                        {translate(TRANSLATION.GO_TO_A_SEARCH_PAGE)}
                    </PrimaryButton>
                </NotificationTDB>
            )}
            {!!favoriteCompany && favoriteCompany.map(company =>
                <Company
                    key={company.id}
                    company={company}
                    clickHandler={() => {
                        dispatch(setCompanyId(company.id))
                        LocalStorage.remove(LOCAL_STORAGE_KEY.SEARCH_DETAILS_COMPANY)
                        navigate(`${URL.SEARCH_DETAILS}/${company.id}`)
                    }}
                />
            )}
        </>
    )
}

export default FavoriteCompanyPage;