import {useDispatch, useSelector} from "react-redux";

import {getRegions} from "../../utils/utils";
import {cities} from "../../features/cityPopup/cities";
import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {hideCityPopup, setSelectedRegion, showRegions, setSelectedCity} from "../../features/cityPopup/cityPopupSlice";
import {Wrapper} from "./PopupCity.style"
import {ContentContainer, SettingMenuRow} from '../index'
import React from "react";

const PopupCity = () => {
    const isVisiblePopup = useSelector(state => state.cityPopup.isVisible);
    const dispatch = useDispatch();

    if (!isVisiblePopup) {
        return null;
    }

    return (
        <InvisibleWrapper onClick={() => dispatch(hideCityPopup())}>
            <CityPopupContent/>
        </InvisibleWrapper>
    );
};

export const CityPopupContent = () => {
    const dispatch = useDispatch();

    const city = useSelector(state => state.cityPopup.city);
    const isRegion = useSelector(state => state.cityPopup.isRegion);

    return (
        <Wrapper>
            <ContentContainer onClick={(e) => e.stopPropagation()} style={{maxHeight: '90vh', 'overflow': 'scroll'}}>
                {!isRegion && <button onClick={() => dispatch(showRegions(getRegions(cities)))}>Back</button>}
                {city.map((c, i) =>
                    <SettingMenuRow
                        key={i.toString()}
                        changeHandler={() => {
                            if (isRegion) {
                                dispatch(setSelectedRegion(c))
                                return;
                            }
                                dispatch(setSelectedCity(c));

                            // setIsVisibleCity(false);
                        }
                        }
                        title={isRegion ? c + ' область' : c}
                        label=""
                    />
                )}
            </ContentContainer>
        </Wrapper>
    )
};

// <CitiesWrapper>
//     {showBackArrow && <ArrowWrapper>
//         <ArrowIcon onClick={backToRegions}/><span>Back</span>
//     </ArrowWrapper>}
//
// </CitiesWrapper>

export default PopupCity;