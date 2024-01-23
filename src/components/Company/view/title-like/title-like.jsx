import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {FirstRow, Name} from "./title-like.style";

import {
    addToFavoriteCompanies,
    deleteFromFavoriteCompanies
} from "features/favorite-company/favoriteComapnySlice";

import {ROUTER} from "utils/config";
import {BE_API, fetchData} from "utils/fetch";
import {errorHandler} from "utils/management";

import {ReactComponent as Heart1Icon} from "assets/icons/heart1.svg";
import {ReactComponent as Heart2Icon} from "assets/icons/heart2.svg";

const TitleLike = ({company}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const customer = useSelector(state => state.customer.value);
    const favotireCompanies = useSelector(state => state.favoriteCompany.value);
    const isLikedByCurrentCustomer = favotireCompanies?.find(fc => fc.id === company.id)

    const likeCompany = e => {
        e.stopPropagation();

        if (!customer) {
            return   navigate(`${ROUTER.SING_IN.URL}?backUrl=${window.location.pathname}`)
        }

        dispatch(addToFavoriteCompanies(company))
        fetchData(BE_API.FAVORITE_COMPANY.ADD(), {company_id: company.id})
            .catch(errorHandler)
    }

    const unlikeCompany = e => {
        e.stopPropagation();
        dispatch(deleteFromFavoriteCompanies(company))
        fetchData(BE_API.FAVORITE_COMPANY.ADD(), {company_id: company.id, method: 'delete'})
            .catch(errorHandler)
    }

    return (
        <FirstRow>
            <Name>{company.name}</Name>
            {isLikedByCurrentCustomer
                ? <Heart2Icon className="like_company_icon" onClick={unlikeCompany}/>
                : <Heart1Icon className="like_company_icon" onClick={likeCompany}/>
            }
        </FirstRow>
    )
}

export default TitleLike;