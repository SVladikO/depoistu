import {useDispatch, useSelector} from "react-redux";

import {BackButtonWrapper, BackButtonInnerWrapper, Wrapper, CitiesWrapper} from "./PopupCity.style"
import {getRegions} from "../../utils/utils";
import {cities as citiesJSON} from "../../features/cityPopup/cities";
import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {
    hideCityPopup,
    setSelectedRegion,
    setCities,
    setSelectedCity,
    setIsRegion
} from "../../features/cityPopup/cityPopupSlice";
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

    let cities = useSelector(state => state.cityPopup.cities)
    const isRegion = useSelector(state => state.cityPopup.isRegion);

    const style = {
        height: '500px',
    }

    return (
        <Wrapper>
            <ContentContainer onClick={(e) => e.stopPropagation()} style={style}>
                {
                    !isRegion
                    &&
                    <BackButtonWrapper>
                        <BackButtonInnerWrapper onClick={() => {
                            dispatch(setCities(getRegions(citiesJSON)))
                            dispatch(setIsRegion(true))
                            dispatch(setSelectedRegion(""))
                            dispatch(setSelectedCity(""))
                        }}>
                            <BackIcon/>
                            Back
                        </BackButtonInnerWrapper>
                    </BackButtonWrapper>
                }
                <CitiesWrapper style={{height: isRegion ? '100%' : '92%'}} className="cities">
                    {cities.map((c, i) =>
                        <SettingMenuRow
                            key={i.toString()}
                            changeHandler={
                                () => {
                                    if (isRegion) {
                                        dispatch(setSelectedRegion(c))
                                        dispatch(setCities(citiesJSON[c]))
                                        dispatch(setIsRegion(false))
                                        document.getElementsByClassName('cities')[0].scrollTo(0, 0);
                                        return;
                                    }
                                    dispatch(setSelectedCity(c));
                                    dispatch(hideCityPopup());
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