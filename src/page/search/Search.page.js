import {Link} from "react-router-dom";
import React, {useMemo, useState} from "react";

import {ReactComponent as LocationIcon} from "../../assets/icons/location.svg";

import {PInput, ContentContainer, Company, NotificationLoading, Popup, RowSplitter} from "../../components";

import {URL} from "../../utils/config";
import {BE_API, fetchData} from "../../utils/fetch";
import {CITY_TRANSLATION_IDS} from "../../utils/cities";
import {translate, TRANSLATION, truncate} from "../../utils/translation";
import {useLocalStorage, useScrollUp, useLocalStorageFetch} from "../../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {publishNotificationEvent} from "../../utils/event";
import {stopLoadingWithDelay} from "../../utils/utils";

const SearchPage = () => {
        useScrollUp();
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


        const onSelectCity = ([city, region]) => {
            LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT)
            setSelectedCity(city);
            setSelectedRegion(region);
            onCloseCityPopup();
        }

        const onCloseCityPopup = () => setShowCityPopup(false);

        const onOpenCityPopup = () => {
            setIsLoadingCityIds(true);

            const cityLoadingDelay = stopLoadingWithDelay([() => setIsLoadingCityIds(false)]);
            const showCityPopupDelay = stopLoadingWithDelay([() => setShowCityPopup(true)]);

            fetchData(BE_API.COMPANY.GET_AVAILABLE_CITIES())
                .then(res => {
                    if (!res.body.length) {
                        publishNotificationEvent.error(translate(TRANSLATION.NOTIFICATION.NO_COMPANY));
                        showCityPopupDelay.onError();
                    } else {
                        showCityPopupDelay.allow()
                    }
                    setAvailableFromDatabaseCityIds(res.body);
                })
                .catch(e => {
                    publishNotificationEvent.error(e.body.errorMessage)
                    showCityPopupDelay.onError()
                })
                .finally(() => {
                    cityLoadingDelay.allow();
                })

        }

        const cityPopup = useMemo(() =>
            <Popup.City
                onSelectCity={onSelectCity}
                availableCityIds={availableFromDatabaseCityIds}
                onClose={onCloseCityPopup}
            />, [availableFromDatabaseCityIds]);

        const regionLabel = translate(TRANSLATION.COMPONENTS.POPUP.CITY.INPUT)

        return (
            <>

                <ContentContainer>
                    <PInput
                        handleClick={onOpenCityPopup}
                        withIcon
                        Icon={LocationIcon}
                        value={
                            selectedCityId && selectedRegionId
                                ? truncate(`${translate(CITY_TRANSLATION_IDS[selectedCityId])}, ${translate(CITY_TRANSLATION_IDS[selectedRegionId])} ${regionLabel}`, 27)
                                : ''
                        }
                        placeholder={translate(TRANSLATION.PAGE.SEARCH.INPUT_PLACEHOLDER)}
                    />
                </ContentContainer>

                {isLoadingCityIds && <NotificationLoading>Loading available cities ...</NotificationLoading>}
                {isLoadingCompanies && <NotificationLoading>Loading companies ...</NotificationLoading>}
                <RowSplitter height="10px" />
                {!isLoadingCompanies && companies && !!companies.length && selectedCityId &&
                    companies?.map(company =>
                        <Link to={`${URL.SEARCH_DETAILS}${company.id}`} key={company.id}>
                            <Company key={company.id} company={company}/>
                        </Link>
                    )
                }
                {showCityPopup && cityPopup}
            </>
        );
    }
;

export default SearchPage;