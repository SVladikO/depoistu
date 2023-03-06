import {useDispatch, useSelector} from "react-redux";

import {BackButtonWrapper, Wrapper, CitiesWrapper} from "./PopupCity.style"
import {getRegions} from "../../utils/utils";
import {cities} from "../../features/cityPopup/cities";
import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {hideCityPopup, setSelectedRegion, showRegions, setSelectedCity} from "../../features/cityPopup/cityPopupSlice";
import {ContentContainer, SettingMenuRow} from '../index'

import {ReactComponent as BackIcon} from "../../icons/back.svg";

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

    const style = {
        'overflow-y': 'scroll',
        height: '500px'
    }

    return (
        <Wrapper>
            <ContentContainer onClick={(e) => e.stopPropagation()} style={style}>
                {
                    !isRegion
                    && <BackButtonWrapper onClick={() => dispatch(showRegions(getRegions(cities)))}>
                        <BackIcon/>
                        Back
                    </BackButtonWrapper>
                }
                <CitiesWrapper>
                {city.map((c, i) =>
                    <SettingMenuRow
                        key={i.toString()}
                        changeHandler={
                            () => {
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
                        style={{margin: 0, padding: '0 0 20px'}}
                    />
                )}
                </CitiesWrapper>
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