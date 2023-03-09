import React, {useEffect, useState} from "react";
import {InputWrapper} from "./Search.page.style";
import {Input} from "../../components";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {showCityPopup} from "../../features/cityPopup/cityPopupSlice";
import {useDispatch, useSelector} from "react-redux";
import utf8 from "utf8";


const SearchPage = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector(state => state.cityPopup.selectedCity);
    const selectedRegion = useSelector(state => state.cityPopup.selectedRegion);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const url = encodeURI(`https://pizza-mobile-api.herokuapp.com/companies/?x=${selectedCity.toLowerCase()}`);
        let myHeaders = new Headers();
        myHeaders.append('Content-Type','text/plain; charset=UTF-8');
         fetch(url,myHeaders)
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
            {companies.map(company => <div key={company.ID}>{company.name}</div>)}
        </>
    );
};

export default SearchPage;