import {useDispatch, useSelector} from "react-redux";

import {BackButtonWrapper, BackButtonInnerWrapper, Wrapper, CitiesWrapper} from "./PopupCity.style"
import {getRegions} from "../../utils/utils";
import {cities} from "../../features/cityPopup/cities";
import {InvisibleWrapper} from '../PopupInvisiableWrapper/PopupInvisiableWrapper.style'
import {hideCityPopup, setSelectedRegion, showRegions, setSelectedCity} from "../../features/cityPopup/cityPopupSlice";
import {ContentContainer, SettingMenuRow} from '../index'

import {ReactComponent as BackIcon} from "../../icons/back.svg";

const prevent = e => {
    e.preventDefault();
    e.stopPropagation()
}

const PopupCity = () => {
    const isVisiblePopup = useSelector(state => state.cityPopup.isVisible);
    const dispatch = useDispatch();

    if (!isVisiblePopup) {
        return null;
    }

    const closePopup = e => {
        prevent(e);
        dispatch(hideCityPopup());
    }

    return (
        <InvisibleWrapper
            onMouseUp={closePopup}
            onTouchEnd={closePopup}
        >
            <CityPopupContent/>
        </InvisibleWrapper>
    );
};

export const CityPopupContent = () => {
    const dispatch = useDispatch();

    let city = useSelector(state => state.cityPopup.city)
    const isRegion = useSelector(state => state.cityPopup.isRegion);

    const style = {
        height: '400px',
    }

    return (
        <Wrapper
            onTouchStart={prevent}
            onMouseDown={prevent}
        >
            <ContentContainer style={style}>
                {
                    !isRegion
                    &&
                    <BackButtonWrapper>
                        <BackButtonInnerWrapper onClick={() => dispatch(showRegions(getRegions(cities)))}>
                            <BackIcon/>
                            Назад
                        </BackButtonInnerWrapper>
                    </BackButtonWrapper>
                }
                <CitiesWrapper style={{height: isRegion ? '100%' : '92%'}} className="cities">
                    {city.map((c, i) =>
                        <SettingMenuRow
                            key={i.toString()}
                            changeHandler={
                                () => {
                                    if (isRegion) {
                                        dispatch(setSelectedRegion(c))
                                        document.getElementsByClassName('cities')[0].scrollTo(0, 0);
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