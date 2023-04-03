import {EditBar, Wrapper} from "./EditCompanyList.style";
import {Institution, PrimaryWideButton, PrimaryWithIconButton} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import React, {useState} from "react";
import {LocalStorage} from "../../utils/utils";
import {useLocalStorageFetch} from "../../utils/hook";
import {BE_API, ROUTER} from "../../utils/config";
import {Link} from "react-router-dom";

const EditCompanyListPage = () => {
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
                        <EditBar>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID}>
                                <PrimaryWithIconButton><EditIcon/><span>Company</span></PrimaryWithIconButton>
                            </Link>
                            <Link to={ROUTER.EDIT_MENU.URL + '/' + company.ID}>
                                <PrimaryWithIconButton><EditIcon/><span>Menu</span></PrimaryWithIconButton>
                            </Link>
                        </EditBar>

                    </div>)
            }
            <PrimaryWideButton>+ Add new company</PrimaryWideButton>
        < /Wrapper>
    )
};

export default EditCompanyListPage;