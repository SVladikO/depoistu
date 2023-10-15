import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import {Company} from "../../components";

import SingInSingUpView from "../../page-view/singInSingUp/singInSingUp.view";

import {initFavoriteCompanies} from "features/favorite-company/favoriteComapnySlice";
import {addCompanyIdForSearchDetailsPage} from "features/searchDetailsPage/searchDetailsPageSlice";

import {URL} from 'utils/config'
import {useScrollUp} from "utils/hook";
import {BE_API, fetchData} from "utils/fetch";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {publishNotificationEvent} from "utils/event";
import {translate, TRANSLATION} from "../../utils/translation";

const FavoritePage = () => {
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

        fetchData(BE_API.FAVORITE_COMPANY.GET())
            .then(res => {
                dispatch(initFavoriteCompanies(res.body))
            })
            .catch(e => publishNotificationEvent.error(e.body.errorMessage))
    })

    return (
        <>
        <SingInSingUpView backUrl={URL.FAVORITE}/>
            {!favoriteCompany.length && (
                <div>{translate(TRANSLATION.PAGE.FAVORITE.NO_CONTENT)}</div>
            )}
            {!!favoriteCompany && favoriteCompany.map(company =>
                <Company
                    key={company.id}
                    company={company}
                    clickHandler={() => {
                        dispatch(addCompanyIdForSearchDetailsPage(company.id))
                        LocalStorage.remove(LOCAL_STORAGE_KEY.SEARCH_DETAILS_COMPANY)
                        LocalStorage.remove(LOCAL_STORAGE_KEY.SEARCH_DETAILS_MENU)
                        navigate(`${URL.SEARCH_DETAILS}/${company.id}`)
                    }}
                />
            )}
        </>
    )
}

export default FavoritePage;