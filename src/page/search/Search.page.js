import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useMemo, useState} from "react";

import {ReactComponent as LocationIcon} from "assets/icons/location.svg";

import {CityInput, ContentContainer, Company, NotificationLoading, Popup, RowSplitter} from "components";

import {URL} from "utils/config";
import {BE_API, fetchData} from "utils/fetch";
import {stopLoadingWithDelay} from "utils/utils";
import {CITY_TRANSLATION_IDS} from "utils/cities";
import {publishNotificationEvent} from "utils/event";
import {translate, TRANSLATION, truncate} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {useLocalStorage, useScrollUp, useLocalStorageFetch} from "utils/hook";
import {addCompanyIdForSearchDetailsPage} from "../../features/searchDetailsPage/searchDetailsPageSlice";

const SearchPage = () => {
        useScrollUp();
        const navigate = useNavigate();
        const dispatch = useDispatch();

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

                <ContentContainer noBg noShadow>
                    <CityInput
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

                {isLoadingCityIds &&
                    <NotificationLoading>{translate(TRANSLATION.NOTIFICATION.COMPANY.LOADING_AVAILABLE_CITIES)}</NotificationLoading>}
                {isLoadingCompanies &&
                    <NotificationLoading>{translate(TRANSLATION.NOTIFICATION.LOADING_AVAILABLE_COMPANIES)}</NotificationLoading>}
                <RowSplitter height="10px"/>
                {!isLoadingCompanies && companies && !!companies.length && selectedCityId &&
                    companies?.map(company =>
                        <Company
                            key={company.id}
                            company={company}
                            clickHandler={() => {
                                dispatch(addCompanyIdForSearchDetailsPage(company.id))
                                LocalStorage.remove(LOCAL_STORAGE_KEY.SEARCH_DETAILS_COMPANY)
                                LocalStorage.remove(LOCAL_STORAGE_KEY.SEARCH_DETAILS_MENU)
                                navigate(`${URL.SEARCH_DETAILS}/${company.id}`)
                            }}/>
                    )
                }
                {showCityPopup && cityPopup}
            </>
        );
    }
;

export default SearchPage;