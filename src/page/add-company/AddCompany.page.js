import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import React, {useState} from "react";

import {Notification} from "../../components";

import {WarningText, Reference} from "./AddCompany.style";

import CompanyView from "../../page-view/company/company-view";

import {initialValues} from './utils';
import {URL} from "../../utils/config";
import {BE_API} from '../../utils/fetch'
import {fetchData} from "../../utils/fetch";
import {getScheduleAsString} from "../../utils/company";
import {useRedirectToSettingPage} from "../../utils/hook";
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {ReactComponent as LinkArrowIcon} from "../../icons/right-anchor.svg";


const AddCompany = () => {
    useRedirectToSettingPage();
    const CUSTOMER = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER)
    const [isLoading, setIsLoading] = useState(false);
    const [isCompanySaved, setIsCompanySaved] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [newCompanyId, setNewCompanyId] = useState();

    const onSubmit = values => {
        const {name, city_id, street, phone} = values;
        const schedule = getScheduleAsString(values)
        const customer_id = CUSTOMER.ID;

        const reqObj = {customer_id, name, city_id, street, phone, schedule};

        setIsLoading(true);

        fetchData(BE_API.COMPANY.POST_CREATE(), reqObj)
            .then(res => {
                setIsCompanySaved(true);
                setNewCompanyId(res.body.insertId);
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES)
            })
            .catch(res => setRequestError(res.body.message))
            .finally(() => setIsLoading(false))
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
            <CompanyView
                isLoading={isLoading}
                initialValues={initialValues}
                onSubmit={onSubmit}
                submitButtonTitle={translate(TRANSLATION.PAGE.ADD_COMPANY.BUTTON.ADD_COMPANY)}
            />
        </>
    )
};


export default AddCompany;