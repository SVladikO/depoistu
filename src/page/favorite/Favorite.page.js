import React, {useEffect, useState} from 'react';

import {URL} from 'utils/config'

import SingInSingUpView from "../../page-view/singInSingUp/singInSingUp.view";
import {useScrollUp} from "../../utils/hook";
import {BE_API, fetchData} from "../../utils/fetch";
import {Company} from "../../components";
import {addCompanyIdForSearchDetailsPage} from "../../features/searchDetailsPage/searchDetailsPageSlice";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const FavoritePage = () => {
    useScrollUp();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [companies, setCompanies] = useState();


    useEffect(() => {

        if (companies) {
            return
        }

        fetchData(BE_API.FAVORITE_COMPANY)
            .then(res => {
                setCompanies(res.body)
            })
            .catch(res => console.log('error'))
    })

    return (
        <>
        <SingInSingUpView backUrl={URL.FAVORITE}/>
            {companies && companies.length && companies.map(company =>
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