import React, {useState} from 'react';
import {ArrowWrapper, CitiesWrapper, InputWrapper} from "./Search.page.style";
import {ImagePopup, Input, SettingMenuRow} from "../../components";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {ReactComponent as ArrowIcon} from "../../icons/back_arrow.svg";
import {cities} from "./cities";
import {showPopup} from "../../features/imagePopup/imagePopupSlice";
import {useDispatch} from "react-redux";

const getRegions = cities => Object.keys(cities);

const SearchPage = () => {
    const dispatch = useDispatch();

    const [isVisibleCity, setIsVisibleCity] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [citiesToChoise, setCitiesToChoise] = useState({isRegions: true, value: getRegions(cities)});
    const [showBackArrow, setShowBackArrow] = useState(false);


    const showCities = () => {
        dispatch(showPopup({cities}));
        setIsVisibleCity(!isVisibleCity);
    }

    const clearInput = () => {
        setIsVisibleCity(true);
        setCitiesToChoise({isRegions: true, value: getRegions(cities)});
        setSelectedCity('');
        setSelectedRegion('');
    }

    const backToRegions = () => {
        setIsVisibleCity(true);
        setCitiesToChoise({isRegions: true, value: getRegions(cities)});
    }


    // useEffect(() => {
    //     filterCities(inputValue)
    // }, [inputValue])
    //
    //
    // const filterCities = (input) => {
    //     setCities(cities.filter(city => city.includes(input)))
    //  onChange={(e) => setInputValue(e.target.value)}
    // }

    return (
        <>
            <InputWrapper>
                <Input Icon={LocationIcon} withCleaner onClick={clearInput} onFocus={showCities}
                       value={selectedCity ? `${selectedCity}, ${selectedRegion} обл` : ""}/>
            </InputWrapper>

                <CitiesWrapper>
                    {showBackArrow && <ArrowWrapper>
                        <ArrowIcon onClick={backToRegions}/><span>Back</span>
                    </ArrowWrapper>}
                    <ImagePopup cities={{cities}}>
                        {isVisibleCity && citiesToChoise.value.map((city, i) =>
                            <SettingMenuRow
                                key={i.toString()}
                                changeHandler={() => {
                                    if (citiesToChoise.isRegions) {
                                        setSelectedRegion(city)
                                        setCitiesToChoise({isRegions: false, value: cities[city]});
                                        setShowBackArrow(true);
                                        return;
                                    }
                                    setSelectedCity(city);
                                    setIsVisibleCity(false);
                                }}
                                title={citiesToChoise.isRegions ? city + ' область' : city}
                                label=""
                            />)}
                    </ImagePopup>
                </CitiesWrapper>

        </>
    );
};

export default SearchPage;