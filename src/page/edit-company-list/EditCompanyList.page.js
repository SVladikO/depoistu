import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {EditBar} from "./EditCompanyList.style";

import {Company, Notification, PrimaryWideButton, PrimaryWithIconButton} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {BE_API, ROUTER} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";

const EditCompanyListPage = () => {
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [requestError, setRequestError] = useState('');
    const [customer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));
    const [customerCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES,
        [],
        BE_API.GET_COMPANIES_BY_CUSTOMER_ID(customer.ID),
        setRequestError
    );

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
                        <Company company={company}/>
                        <EditBar>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID}>
                                <PrimaryWithIconButton><EditIcon/>Company</PrimaryWithIconButton>
                            </Link>
                            <Link to={ROUTER.EDIT_MENU.URL + '/' + company.ID}>
                                <PrimaryWithIconButton><EditIcon/>Menu</PrimaryWithIconButton>
                            </Link>
                        </EditBar>

                    </div>)
            }
            <PrimaryWideButton>+ Add new company</PrimaryWideButton>
        < />
    )
};

export default EditCompanyListPage;