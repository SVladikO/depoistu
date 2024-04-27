import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {ContentContainer, Dropdown, Company, NotificationLoading, RowSplitter} from "components";
import {resetSearchDetails} from "features/searchDetails/searchDetailsSlice";

import {URL} from "utils/config";
import {
    getRegions,
    getRegionCities, generateCityTree, CITY_TRANSLATION_IDS
} from "utils/cities";
import {publishNotificationEvent} from "utils/event";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {BE_API, fetchData, errorHandler} from "utils/fetch";
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY} from "utils/localStorage";

const SearchPage = () => {
        useScrollUp();
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const [isLoading, setIsLoading] = useState(false);
        const [selectedRegion, setSelectedRegion] = useLocalStorage(
            LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_REGION_ID, {title: translate(CITY_TRANSLATION_IDS[1000]), value: 1000}
        );
        //Default is Kyiv.
        const [selectedCity, setSelectedCity] = useLocalStorage(
            LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_CITY_ID, {title: translate(CITY_TRANSLATION_IDS[1018]), value: 1018}
        );

        const [cityTree, setCityTree] = useState({});

        let [companies, setCompanies] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT, [])

        const onSelectRegion = option => {
            if (option.value === selectedRegion.value) {
                return;
            }

            setSelectedRegion(option)
            setSelectedCity({});
        }

        const onSelectCity = option => {
            setCompanies([])
            setSelectedCity(option);
        }


        const onClickCompany = company => () => {
            dispatch(resetSearchDetails())
            navigate(`${URL.SEARCH_DETAILS}/${company.id}`)
        }

        const loadCompanies = () => {
            if (!selectedCity.value) {
                return
            }

            setIsLoading(true);

            fetchData(BE_API.COMPANY.GET_BY_CITY_ID(selectedCity.value))
                .then(res => setCompanies(res.body))
                .catch(errorHandler)
                .finally(() => setIsLoading(false))
        }

        useEffect(() => {
            if (companies.length) {
                return
            }
            loadCompanies()
        }, [selectedCity])

        useEffect(() => {
                fetchData(BE_API.COMPANY.GET_AVAILABLE_CITIES())
                    .then(res => {
                        if (!res.body.length) {
                            publishNotificationEvent.error(translate(TRANSLATION.NOTIFICATION.NO_COMPANY));
                        }

                        setCityTree(generateCityTree((res.body || []).map(i => +i)));

                    })
                    .catch(e => {
                        errorHandler(e)
                    })
            }, []
        )


        return (
            <>
                <RowSplitter height={'20px'}/>

                <ContentContainer noBg noShadow>
                    <Dropdown
                        selectedOption={selectedRegion}
                        options={getRegions(cityTree)}
                        onSelect={onSelectRegion}
                        label={'Region'}
                    />
                    <Dropdown
                        selectedOption={selectedCity}
                        options={getRegionCities(cityTree, selectedRegion.value)
                        }
                        onSelect={onSelectCity}
                        label={'City'}
                    />
                </ContentContainer>

                {isLoading &&
                    <NotificationLoading>{translate(TRANSLATION.NOTIFICATION.COMPANY.LOADING_AVAILABLE_CITIES)}</NotificationLoading>}
                <RowSplitter height="10px"/>
                {!isLoading && companies && companies.map(company =>
                    <Company
                        key={company.id}
                        isShowAllImages={false}
                        company={company}
                        clickHandler={onClickCompany(company)}
                    />
                )}
            </>
        );
    }
;

export default SearchPage;