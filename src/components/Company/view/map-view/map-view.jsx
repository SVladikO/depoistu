import React, {useState} from "react";

import {Map} from "components/index";
import {ThirdButton} from "components/Buttons/ThirdButton";

import {translate, TRANSLATION} from "utils/translation";

const MapView = ({company}) => {
    const [isShowMap, setIsShowMap] = useState(false);

    if (!isShowMap) {
        return (
            <ThirdButton onClick={() => setIsShowMap(true)}>
                {translate(TRANSLATION.COMPONENTS.COMPANY.SHOW_MAP_BUTTON)}
            </ThirdButton>
        )
    }

    return (
        <>
            <ThirdButton onClick={() => setIsShowMap(false)}>
                {translate(TRANSLATION.COMPONENTS.COMPANY.HIDE_MAP_BUTTON)}
            </ThirdButton>
            <Map center={[company.longitude, company.latitude]}/>

        </>
    )
}

export default MapView;