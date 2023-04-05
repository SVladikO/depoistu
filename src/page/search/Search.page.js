import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Warning} from "./Search.page.style";
import {showCityPopup} from "../../features/cityPopup/cityPopupSlice";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {PInput, ContentContainer, Company} from "../../components";
import {BE_API, URL} from "../../utils/config";
import {fetchData} from "../../utils/fetch";

const SearchPage = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector(state => state.cityPopup.selectedCity);
    const selectedRegion = useSelector(state => state.cityPopup.selectedRegion);
    const [companies, setCompanies] = useState([]);
    const url = BE_API.GET_COMPANIES_BY_CITY(selectedCity);
    const [warning, setWarning] = useState('');
    const warningMessage = 'There is no installations in current city';
    const [inputField] = useState('');

    const showWarning = () => {
        setWarning(warningMessage)
    }

    useEffect(() => {
        if (selectedCity === '') {
            return;
        }
        fetchData(url)
            .then(data => {
                if (data.length === 0) {
                    showWarning();
                }
                setCompanies(data)
            }).catch(() => {
            showWarning();
        })
    }, [selectedCity, url]);

    const openCityPopup = () => {
        dispatch(showCityPopup());
        document.body.style.position = 'fixed';
    }

    return (
        <>
            <ContentContainer>
                <PInput
                    handleClick={openCityPopup}
                    withIcon
                    Icon={LocationIcon}
                    value={inputField}
                >
                    {selectedCity ? `${selectedCity}, ${selectedRegion} обл` : ""}
                </PInput>
            </ContentContainer>
            {selectedCity && selectedRegion && companies.length === 0
                ? <Warning>{warning}</Warning>
                : companies.map(company =>
                <Link to={`${URL.SEARCH_DETAILS}${company.ID}`} key={company.ID}><Company key={company.ID} company={company}/></Link>)
            }
        </>
    );
};

export default SearchPage;