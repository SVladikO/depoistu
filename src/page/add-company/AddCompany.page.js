import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";

import {Notification} from "../../components";

import CompanyView from "../../page-view/company/company-view";

import {initialValues} from './utils';
import {fetchData} from "../../utils/fetch";
import {BE_API, URL} from "../../utils/config";
import {LOCAL_STORAGE_KEY, LocalStorage, getScheduleAsString} from "../../utils/utils";

const AddCompany = () => {
    const CUSTOMER = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER)
    const [isLoading, setIsLoading] = useState(false);
    const [isCompanySaved, setIsCompanySaved] = useState(false);
    const [requestError, setRequestError] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const onSubmit = values => {
        const {name, city, street, phone} = values;
        const schedule = getScheduleAsString(values)
        const customer_id = CUSTOMER.ID;

        const reqObj = {customer_id, name, city, street, phone, schedule};

        setIsLoading(true);

        fetchData(BE_API.POST_COMPANY_CREATE(), reqObj)
            .then(res => {
                setIsCompanySaved(true);
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES)
            })
            .catch(res => setRequestError(res.status + " Error: " + res.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (isCompanySaved) {
        return (
            <Notification.Success message={"Company created."}>
                <Link to={URL.CUSTOMER_COMPANIES}>Open my companies</Link>
            </Notification.Success>
        );
    }

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
            <CompanyView
                initialValues={initialValues}
                onSubmit={onSubmit}
            />
        </>
    )
};


export default AddCompany;