import {Link} from "react-router-dom";
import React, {useMemo, useState} from "react";

import {ReactComponent as LocationIcon} from "../../assets/icons/location.svg";

import {PInput, ContentContainer, Company, NotificationLoading, Popup} from "../../components";

import {URL} from "../../utils/config";
import {BE_API, fetchData} from "../../utils/fetch";
import {CITY_TRANSLATION_IDS} from "../../utils/cities";
import {translate, TRANSLATION} from "../../utils/translation";
import {useLocalStorage, useLocalStorageFetch} from "../../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {publishNotificationEvent} from "../../utils/event";
import {stopLoadingWithDelay} from "../../utils/utils";

const SearchPage = () => {
        const [isLoadingCityIds, setIsLoadingCityIds] = useState(false);
        const [isLoadingCompanies, setIsLoadingCompanies] = useState(false);

        const [selectedCityId, setSelectedCity] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_CITY_ID, '');
        const [selectedRegionId, setSelectedRegion] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_REGION_ID, '');
        const [showCityPopup, setShowCityPopup] = useState(false);
        const [availableFromDatabaseCityIds, setAvailableFromDatabaseCityIds] = useState([]);

        let [companies] = useLocalStorageFetch(
            LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT,
            [],
            BE_API.COMPANY.GET_BY_CITY_ID(selectedCityId),
            setIsLoadingCompanies,
            () => !selectedCityId
        );

        const onOpenCityPopup = () => {
            setIsLoadingCityIds(true);
            const stopLoading = stopLoadingWithDelay([
                () => setIsLoadingCityIds(false),
            ]);

            const stopLoading2 = stopLoadingWithDelay([
                () => setShowCityPopup(true)
            ]);
            fetchData(BE_API.COMPANY.GET_AVAILABLE_CITIES())
                .then(res => {
                    stopLoading2()
                    setAvailableFromDatabaseCityIds(res.body);
                })
                .catch(e => publishNotificationEvent.error(e.body.errorMessage))
                .finally(() => stopLoading())
        }

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

        const regionLabel = translate(TRANSLATION.COMPONENTS.POPUP.CITY.INPUT)

        if (selectedCityId && selectedRegionId && companies.length === 0) {
            publishNotificationEvent.error('There is no companies in current city');
        }

        return (
            <>
                <ContentContainer>
                    <PInput
                        handleClick={onOpenCityPopup}
                        withIcon
                        Icon={LocationIcon}
                        value={
                            selectedCityId && selectedRegionId
                                ? `${translate(CITY_TRANSLATION_IDS[selectedCityId])}, ${translate(CITY_TRANSLATION_IDS[selectedRegionId])} ${regionLabel}`
                                : ''
                        }
                        placeholder={translate(TRANSLATION.PAGE.SEARCH.INPUT_PLACEHOLDER)}
                    />
                </ContentContainer>
                {isLoadingCityIds && <NotificationLoading>Loading cities ...</NotificationLoading>}
                {isLoadingCompanies && <NotificationLoading>Loading companies ...</NotificationLoading>}
                {!isLoadingCompanies && companies && !!companies.length && selectedCityId &&
                    companies?.map(company =>
                        <Link to={`${URL.SEARCH_DETAILS}${company.ID}`} key={company.ID}>
                            <Company key={company.ID} company={company}/>
                        </Link>
                    )
                }
                {showCityPopup && cityPopup}
            </>
        );
    }
;

export default SearchPage;