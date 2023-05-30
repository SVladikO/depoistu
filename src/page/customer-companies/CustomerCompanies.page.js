import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {EditBar} from "./CustomerCompanies.style";

import {Company, Notification, PrimaryButton} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {BE_API, ROUTER, URL} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";

const CustomerCompaniesPage = () => {
    const navigate = useNavigate();
    const isLoading = useSelector(state => state.request.value.isLoading);

    const [requestError, setRequestError] = useState('');
    const [customer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));


    const [customerCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES,
        [],
        BE_API.GET_COMPANIES_BY_CUSTOMER_ID(customer.ID),
        setRequestError
    );

    if (!customer) {
        return navigate(URL.SETTING)
    }

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    return (
        <>
            {customerCompanies.map(
                company =>
                    <div key={company.ID}>
                        <Company company={company}>
                            <EditBar>
                                <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID}>
                                    <PrimaryButton><EditIcon/>Company</PrimaryButton>
                                </Link>
                                <Link to={ROUTER.EDIT_MENU.URL + '/' + company.ID}>
                                    <PrimaryButton><EditIcon/>Menu</PrimaryButton>
                                </Link>
                            </EditBar>
                        </Company>
                    </div>)
            }
            <Link to={URL.ADD_COMPANY}>
                <PrimaryButton isWide>+ Add new company</PrimaryButton>
            </Link>
        < />
    )
};

export default CustomerCompaniesPage;