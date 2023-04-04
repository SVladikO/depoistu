import React, {useState} from "react";
import {Link} from "react-router-dom";

import {EditBar, Wrapper} from "./EditCompanyList.style";

import {Institution, PrimaryWideButton, PrimaryWithIconButton} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {useLocalStorageFetch} from "../../utils/hook";
import {LocalStorage} from "../../utils/utils";
import {BE_API, ROUTER} from "../../utils/config";

const EditCompanyListPage = () => {
    const [customer] = useState(LocalStorage.getGuest());
    const [customerCompanies] = useLocalStorageFetch(
        'customerCompanies',
        [],
        BE_API.GET_COMPANIES_BY_CUSTOMER_ID(customer.ID)
    );

    return (
        <Wrapper>
            {customerCompanies.map(
                company =>
                    <div key={company.ID}>
                        <Institution company={company}/>
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
        < /Wrapper>
    )
};

export default EditCompanyListPage;