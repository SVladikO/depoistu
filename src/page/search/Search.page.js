import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {showCityPopup} from "../../features/cityPopup/cityPopupSlice";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {PInput, ContentContainer, Company, Notification, PopupCity} from "../../components";
import {BE_API, URL} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";

const SearchPage = () => {
    const [inputField] = useState('');
    const [requestError, setRequestError] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.request.value.isLoading);
    const selectedCity = useSelector(state => state.cityPopup.selectedCity);
    const selectedRegion = useSelector(state => state.cityPopup.selectedRegion);

    let [companies, setCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT,
        [],
        BE_API.GET_COMPANIES_BY_CITY(selectedCity),
        setRequestError,
        () => !selectedCity
    );

    const openCityPopup = () => {
        dispatch(showCityPopup());
        document.body.style.position = 'fixed';
    }

    if (isLoading) {
        return <Notification.Loading/>;
    }

    // If we use useLocalStorageFetch than we need below code to handle error.
    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    return (
        <>
            <ContentContainer>
                <PInput
                    handleClick={openCityPopup}
                    withIcon
                    Icon={LocationIcon}
                    value={inputField}
                >
                    {selectedCity ? `${selectedCity}, ${selectedRegion} обл` : ""}
                </PInput>
            </ContentContainer>
            {selectedCity && selectedRegion && companies.length === 0
                ? <Notification.Error message={'There is no companies in current city'} />
                : companies && selectedCity &&
                  companies.map(company =>
                        <Link to={`${URL.SEARCH_DETAILS}${company.ID}`} key={company.ID}>
                            <Company key={company.ID} company={company}/>
                        </Link>
                   )
            }
            <PopupCity changeChoice={() => {
                setCompanies([])
                LocalStorage.remove(LOCAL_STORAGE_KEY.COMPANY_SEARCH_RESULT);
            }}/>
        </>
    );
};

export default SearchPage;