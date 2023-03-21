import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Warning} from "./Search.page.style";
import {Link} from "react-router-dom";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {PInput, ContentContainer, Institution} from "../../components";
import {showCityPopup} from "../../features/cityPopup/cityPopupSlice";
import {logDOM} from "@testing-library/react";

const SearchPage = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector(state => state.cityPopup.selectedCity);
    const selectedRegion = useSelector(state => state.cityPopup.selectedRegion);
    const [companies, setCompanies] = useState([]);
    const url = `https://pizza-mobile-api.herokuapp.com/companies/${selectedCity}`;
    const [warning, setWarning] = useState('');
    const warningMessage = 'There is no installations in current city';

    const showWarning = () => {
        setWarning(warningMessage)
    }

    useEffect(() => {
        if (selectedCity === '') {
            return;
        }
        fetch(decodeURIComponent(url),)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    showWarning();
                }
                setCompanies(data)
            }).catch(e => {
            showWarning();
        })
    }, [selectedCity]);


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
                >
                    {selectedCity ? `${selectedCity}, ${selectedRegion} обл` : ""}
                </PInput>
            </ContentContainer>
            {companies.length === 0 ? <Warning>{warning}</Warning> : selectedCity && companies.map(company =>
                    <Link to={`result/${company.ID}`} key={company.ID}><Institution company={company}/></Link>)
            }
        </>
    );
};

export default SearchPage;