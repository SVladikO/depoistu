import {Link} from "react-router-dom";
import React, {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";

import {ReactComponent as LocationIcon} from "../../icons/location.svg";

import {PInput, ContentContainer, Company, Notification, Popup} from "../../components";

import {URL} from "../../utils/config";
import {BE_API, fetchData} from "../../utils/fetch";
import {useLocalStorage, useLocalStorageFetch} from "../../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {translate, TRANSLATION} from "../../utils/translation";
import {cities} from "../../utils/cities";

const SearchPage = () => {
    const [requestError, setRequestError] = useState('');
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [selectedCityId, setSelectedCity] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_CITY_ID, '');
    const [selectedRegionId, setSelectedRegion] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_REGION_ID, '');
    const [showCityPopup, setShowCityPopup] = useState(false);
    const [availableFromDatabaseCityIds, setAvailableFromDatabaseCityIds] = useState([]);
    useEffect(() => {
        if (availableFromDatabaseCityIds.length === 0) {
            fetchData(BE_API.COMPANY.GET_AVAILABLE_CITIES())
                .then(res => {
                    setAvailableFromDatabaseCityIds(res.body);
                })
        }
    })

    let [companies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT,
        [],
        BE_API.COMPANY.GET_BY_CITY_ID(selectedCityId),
        setRequestError,
        () => !selectedCityId
    );

    const onOpenCityPopup = () => setShowCityPopup(true);
    const onCloseCityPopup = () => setShowCityPopup(false);

    const onSelectCity = ([city, region]) => {
        LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT)
        setSelectedCity(city);
        setSelectedRegion(region);
        onCloseCityPopup();
    }
    const cityPopup = useMemo(() =>
        <Popup.City
            onSelectCity={onSelectCity}
            availableCityIds={availableFromDatabaseCityIds}
            onClose={onCloseCityPopup}
        />, [availableFromDatabaseCityIds]);

    if (isLoading) {
        return <Notification.Loading/>;
    }

    const regionLabel = translate(TRANSLATION.COMPONENTS.POPUP.CITY.INPUT)

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
            <ContentContainer>
                <PInput
                    handleClick={onOpenCityPopup}
                    withIcon
                    Icon={LocationIcon}
                    value={
                        selectedCityId && selectedRegionId
                            ? `${translate(cities[selectedCityId])}, ${translate(cities[selectedRegionId])} ${regionLabel}`
                            : ''
                    }
                    placeholder={"Choose city"}
                />
            </ContentContainer>
            {selectedCityId && selectedRegionId && companies.length === 0
                ? <Notification.Error message={'There is no companies in current city'}/>
                : companies && selectedCityId &&
                companies.map(company =>
                    <Link to={`${URL.SEARCH_DETAILS}${company.ID}`} key={company.ID}>
                        <Company key={company.ID} company={company}/>
                    </Link>
                )
            }
            {showCityPopup && cityPopup}
        </>
    );
};

export default SearchPage;