import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useEffect, useMemo, useState} from "react";

import {ReactComponent as LocationIcon} from "assets/icons/location.svg";

import {CityInput, ContentContainer, Company, NotificationLoading, Popup, RowSplitter} from "components";

import {URL} from "utils/config";
import {BE_API, fetchData} from "utils/fetch";
import {stopLoadingWithDelay} from "utils/utils";
import {CITY_TRANSLATION_IDS} from "utils/cities";
import {publishNotificationEvent} from "utils/event";
import {translate, TRANSLATION, truncate} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {addCompanyIdForSearchDetailsPage} from "../../features/searchDetailsPage/searchDetailsPageSlice";

const SearchPage = () => {
        useScrollUp();
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const [isLoading, setIsLoading] = useState(false);


        const [selectedCityId, setSelectedCity] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_CITY_ID, '');
        const [selectedRegionId, setSelectedRegion] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_REGION_ID, '');
        const [showCityPopup, setShowCityPopup] = useState(false);
        const [availableFromDatabaseCityIds, setAvailableFromDatabaseCityIds] = useState([]);

        let [companies, setCompanies] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, [])

        useEffect(() => {
            if (isLoading || companies?.length) {
                return;
            }

            setIsLoading(true);

            fetchData(BE_API.COMPANY.GET_ALL())
                .then(res => {
                    console.log(45, res)
                    setCompanies(res.body)
                })
                .catch(e => publishNotificationEvent.error(e.body.errorMessage))
                .finally(() => setIsLoading(false))
        }, [])

        const onSelectCity = ([city, region]) => {
            LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT)
            setSelectedRegion(region);
            onCloseCityPopup();
            setSelectedCity(city);

            fetchData(BE_API.COMPANY.GET_BY_CITY_ID(city))
                .then(res => setCompanies(res.body))
                .catch(e => publishNotificationEvent.error(e.body.errorMessage))
                .finally(() => setIsLoading(false))
        }

        const onCloseCityPopup = () => setShowCityPopup(false);

        const onOpenCityPopup = () => {
            setIsLoading(true);

            const cityLoadingDelay = stopLoadingWithDelay([() => setIsLoading(false)]);
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

                {isLoading &&
                    <NotificationLoading>{translate(TRANSLATION.NOTIFICATION.COMPANY.LOADING_AVAILABLE_CITIES)}</NotificationLoading>}
                <RowSplitter height="10px"/>
                {!isLoading && companies && companies.map(company =>
                    <div key={company.id}>
                        <Company

                            company={company}
                            clickHandler={
                                () => {
                                    dispatch(addCompanyIdForSearchDetailsPage(company.id))
                                    LocalStorage.remove(LOCAL_STORAGE_KEY.SEARCH_DETAILS_COMPANY)
                                    LocalStorage.remove(LOCAL_STORAGE_KEY.SEARCH_DETAILS_MENU)
                                    navigate(`${URL.SEARCH_DETAILS}/${company.id}`)
                                }
                            }
                        />
                    </div>
                )
                }
                {showCityPopup && cityPopup}
            </>
        );
    }
;

export default SearchPage;