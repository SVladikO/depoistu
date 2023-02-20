import React, {useState} from 'react';
import {InputWrapper, CitiesWrapper, ArrowWrapper} from "./Search.page.style";
import {Input, SettingMenuRow} from "../../components";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {ReactComponent as ArrowIcon} from "../../icons/back_arrow.svg";
import {cities} from "./cities";

const getRegions = cities => Object.keys(cities);


const SearchPage = () => {
    const [isVisibleCity, setIsVisibleCity] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [citiesToChoise, setCitiesToChoise] = useState({isRegions: true, value: getRegions(cities)});
    const [showBackArrow, setShowBackArrow] = useState(false);

    const showCities = () => {
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
            </CitiesWrapper>
        </>
    );
};

export default SearchPage;