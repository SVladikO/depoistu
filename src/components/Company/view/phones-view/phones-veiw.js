import React from "react";

import {ReactComponent as PhoneIcon} from "assets/icons/phone.svg";

import {ThirdButton} from "../../../Buttons/ThirdButton";

const PhonesView = ({company, withMoreInfo}) => {

    if (!withMoreInfo) {
        return;
    }

    const renderPhone = phone => phone && (
        <a href={`tel:${phone}`}>
            <ThirdButton>
                <PhoneIcon className="phone_icon"/>
                {phone}
            </ThirdButton>
        </a>
    )

    return (
        <>
            {renderPhone(company.phone1)}
            {renderPhone(company.phone2)}
            {renderPhone(company.phone3)}
        </>
    )
}

export default PhonesView;