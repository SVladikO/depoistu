import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {showCityPopup} from "../../features/cityPopup/cityPopupSlice";
import {useDispatch, useSelector} from "react-redux";
import {ContentContainer, PInput} from '../../components'

const SearchPage = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector(state => state.cityPopup.selectedCity);
    const selectedRegion = useSelector(state => state.cityPopup.selectedRegion);

    const openCityPopup = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(showCityPopup());
    }

    return (
        <>
            <ContentContainer>
            <PInput
                handleClick={openCityPopup}
                handleMouseDown={openCityPopup}
                handleTouchStart={openCityPopup}
                withIcon
                Icon={LocationIcon}
            >
                {selectedCity ? `${selectedCity}, ${selectedRegion} обл` : ""}
            </PInput>
            </ContentContainer>
        </>
    );
};

export default SearchPage;