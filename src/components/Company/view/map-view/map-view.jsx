import React, {useState} from "react";

// import {MapEditor} from "components/index";
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
            {/*<MapEditor*/}
            {/*    position={[company.longitude, company.latitude]}*/}
            {/*    zoom={15}*/}
            {/*    zoomControl*/}
            {/*    companyName={company.name}*/}
            {/*/>*/}
        </>
    )
}

export default MapView;