import {InputWrapper} from "./Search.page.style";
import {Input} from "../../components";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {showCityPopup} from "../../features/cityPopup/cityPopupSlice";
import {useDispatch, useSelector} from "react-redux";

const SearchPage = () => {
    const dispatch = useDispatch();
    const selectedCity = useSelector(state => state.cityPopup.selectedCity);
    const selectedRegion = useSelector(state => state.cityPopup.selectedRegion);

    return (
        <>
            <InputWrapper>
                <Input Icon={LocationIcon} withCleaner

                       onClick={() => dispatch(showCityPopup())}
                       value={selectedCity ? `${selectedCity}, ${selectedRegion} обл` : ""}/>
            </InputWrapper>


        </>
    );
};

export default SearchPage;