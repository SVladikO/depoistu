import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useSelector} from "react-redux";

import {ReactComponent as LocationIcon} from "../../icons/location.svg";

import {PInput, ContentContainer, Company, Notification, Popup} from "../../components";

import {URL} from "../../utils/config";
import {BE_API} from "../../utils/fetch";
import {useLocalStorage, useLocalStorageFetch} from "../../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

const SearchPage = () => {
    const [requestError, setRequestError] = useState('');

    const isLoading = useSelector(state => state.request.value.isLoading);
    const [selectedCity, setSelectedCity] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_CITY, '');
    const [selectedRegion, setSelectedRegion] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_REGION, '');
    const [showCityPopup, setShowCityPopup] = useState(false);

    let [companies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT,
        [],
        BE_API.COMPANY.GET_BY_CITY(selectedCity),
        setRequestError,
        () => !selectedCity
    );

    const openCityPopup = () => setShowCityPopup(true);
    const closeCityPopup = () => setShowCityPopup(false);
    const selectCity = ([city, region]) => {
        LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT)
        setSelectedCity(city);
        setSelectedRegion(region);
        closeCityPopup();
    }

    if (isLoading) {
        return <Notification.Loading/>;
    }

    // If we use useLocalStorageFetch than we need below code to handle error.

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
            <ContentContainer>
                <PInput
                    handleClick={openCityPopup}
                    withIcon
                    Icon={LocationIcon}
                    value={(selectedCity && `${selectedCity}, ${selectedRegion} обл`) || ''}
                    placeholder={"Choose city"}
                />
            </ContentContainer>
            {selectedCity && selectedRegion && companies.length === 0
                ? <Notification.Error message={'There is no companies in current city'}/>
                : companies && selectedCity &&
                companies.map(company =>
                    <Link to={`${URL.SEARCH_DETAILS}${company.ID}`} key={company.ID}>
                        <Company key={company.ID} company={company}/>
                    </Link>
                )
            }
            {showCityPopup && <Popup.City selectCity={selectCity} onClose={closeCityPopup}/>}
        </>
    );
};

export default SearchPage;