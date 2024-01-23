import {translate, truncate} from "../../../../utils/translation";
import {CITY_TRANSLATION_IDS} from "../../../../utils/cities";
import {Link} from "react-router-dom";
import {ReactComponent as LocationIcon} from "assets/icons/location.svg";

import {ThirdButton} from "../../../Buttons/ThirdButton";
import {LocationWrapper} from "../../Company.style";
import React from "react";


const CityStreet = ({company, withMoreInfo}) => {
    if (withMoreInfo) {
        const address = `,${company.street}, ${translate(CITY_TRANSLATION_IDS[company.cityId])}`
        let addressUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`

        return (<Link to={addressUrl} target="_blank" rel="noopener">
            <ThirdButton>
                <LocationIcon className="location_icon"/>
                {truncate(`${translate(CITY_TRANSLATION_IDS[company.cityId])}, ${company.street}`, 40)}
            </ThirdButton>
        </Link>)
    }

    return (
        <LocationWrapper>
            <LocationIcon/>{translate(CITY_TRANSLATION_IDS[company.cityId])}, {company.street}
        </LocationWrapper>
    );
}

export default CityStreet;