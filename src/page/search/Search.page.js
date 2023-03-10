import React, {useEffect, useState} from "react";
import {InputWrapper, Warning} from "./Search.page.style";
import {Input} from "../../components";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {showCityPopup} from "../../features/cityPopup/cityPopupSlice";
import {useDispatch, useSelector} from "react-redux";
import {Institution} from "../../components";

const SearchPage = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector(state => state.cityPopup.selectedCity);
    const selectedRegion = useSelector(state => state.cityPopup.selectedRegion);
    const [companies, setCompanies] = useState([]);
    const url = `https://pizza-mobile-api.herokuapp.com/companies/${selectedCity}`;
    const warning = <Warning>There is no installations in current city</Warning>;


    useEffect(() => {
        fetch(decodeURIComponent(url),)
            .then(response => response.json())
            .then(data => setCompanies(data));
    }, [selectedCity]);


    return (
        <>
            <InputWrapper>
                <Input
                    Icon={LocationIcon}
                    onClick={() => dispatch(showCityPopup())}
                    value={selectedCity ? `${selectedCity}, ${selectedRegion} обл` : ""}
                />
            </InputWrapper>
            {companies.length === 0 ? warning : selectedCity && companies.map(company => <Institution  key={company.ID} company={company}/>)}
        </>
    );
};

export default SearchPage;