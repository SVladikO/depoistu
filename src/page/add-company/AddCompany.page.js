import "swiper/css";
import "swiper/css/pagination";
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";

import {Notification} from "../../components";

import CompanyView from "../../page-view/company/company-view";

import {initialValues} from './utils';
import {URL} from "../../utils/config";
import {BE_API} from '../../utils/fetch'
import {fetchData} from "../../utils/fetch";
import {getScheduleAsString} from "../../utils/company";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {WarningText, Reference} from "./AddCompany.style";
import {ReactComponent as LinkArrowIcon} from "../../icons/right-anchor.svg";


const AddCompany = () => {
    const CUSTOMER = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER)
    const [isLoading, setIsLoading] = useState(false);
    const [isCompanySaved, setIsCompanySaved] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [newCompanyId, setNewCompanyId] = useState();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const onSubmit = values => {
        const {name, city, street, phone} = values;
        const schedule = getScheduleAsString(values)
        const customer_id = CUSTOMER.ID;

        const reqObj = {customer_id, name, city, street, phone, schedule};

        setIsLoading(true);

        fetchData(BE_API.COMPANY.POST_CREATE(), reqObj)
            .then((res) => {
                setIsCompanySaved(true);
                setNewCompanyId(res.body.successMessage.insertId);
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
            <Notification.Success message={"Company was created"}>
                <WarningText>
                    Without menu this company won’t be shown in search
                </WarningText>
                <Reference>
                    <Link to={`${URL.EDIT_MENU}/${newCompanyId}`}>Add menu for this company<LinkArrowIcon/></Link>
                </Reference>
            </Notification.Success>
        );
    }
    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
            {isCompanySaved}
            <CompanyView
                initialValues={initialValues}
                onSubmit={onSubmit}
            />
        </>
    )
};


export default AddCompany;