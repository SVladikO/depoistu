import React from "react";
import {Link} from "react-router-dom";

import {ReactComponent as LocationIcon} from "assets/icons/location.svg";

import {LocationWrapper} from "./city-street-view.style";

import {translate} from "utils/translation";
import {CITY_TRANSLATION_IDS} from "utils/cities";


const CityStreet = ({company, withMoreInfo}) => {
    const address = `${translate(CITY_TRANSLATION_IDS[company.cityId])}, ${company.street}`

    if (withMoreInfo) {
        const addressURL = `${company.street}, ${translate(CITY_TRANSLATION_IDS[company.cityId])}`
        let addressUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressURL)}`

        return (
            <Link to={addressUrl} target="_blank" rel="noopener">
                <LocationWrapper>
                    <LocationIcon/>
                    {address}
                </LocationWrapper>
            </Link>
        )
    }

    return (
        <LocationWrapper>
            <LocationIcon/>
            {address}
        </LocationWrapper>
    );
}

export default CityStreet;