import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {EditBar} from "./EditCompanyList.style";

import {Company, Notification, PrimaryButton} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {BE_API, ROUTER} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";

const EditCompanyListPage = () => {
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [customer] = useState(LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER));
    const [customerCompanies] = useLocalStorageFetch(
        LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES,
        [],
        BE_API.GET_COMPANIES_BY_CUSTOMER_ID(customer.ID)
    );

    if (isLoading) {
        return <Notification.Loading/>;
    }

    return (
        <>
            {customerCompanies.map(
                company =>
                    <div key={company.ID}>
                        <Company company={company}/>
                        <EditBar>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID}>
                                <PrimaryButton><EditIcon/>Company</PrimaryButton>
                            </Link>
                            <Link to={ROUTER.EDIT_MENU.URL + '/' + company.ID}>
                                <PrimaryButton><EditIcon/>Menu</PrimaryButton>
                            </Link>
                        </EditBar>

                    </div>)
            }
            <PrimaryButton>+ Add new company</PrimaryButton>
        < />
    )
};

export default EditCompanyListPage;