import React, {useState} from "react";
import {Link} from "react-router-dom";

import {useLocalStorageFetch} from "../../utils/hook";
import {BE_API, ROUTER} from "../../utils/config";
import {LocalStorage} from "../../utils/utils";
import {Institution, PrimaryWideButton} from "../../components";
import {Wrapper} from "./EditMenuCompanyList.page.style";

const EditMenuCompanyList = () => {
    const [customer] = useState(LocalStorage.getGuest());
    const [customerCompanies] = useLocalStorageFetch(
        'customerCompanies',
        [],
        BE_API.GET_COMPANIES_BY_CUSTOMER_ID(customer.ID)
    );

    console.log(customerCompanies);

    return (
        <Wrapper>
            {customerCompanies.map(
                company =>
                    <div key={company.ID}>
                        <Institution company={company}/>
                        <Link to={ROUTER.EDIT_MENU_COMPANY.URL + '/' + company.ID}>
                            <PrimaryWideButton>Edit menu</PrimaryWideButton>
                        </Link>
                    </div>)
            }
        < /Wrapper>
    )
};

export default EditMenuCompanyList;