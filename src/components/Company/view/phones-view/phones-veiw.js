import React from "react";

import {ThirdButton} from "../../../Buttons/ThirdButton";

import {ReactComponent as PhoneIcon} from "assets/icons/phone.svg";

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