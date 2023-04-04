import {Wrapper, EditBar, EditButton} from "./EditCompanyList.style";
import {Company, Notification} from "../../components";
import {PrimaryWideButton} from "../../components";
import {ReactComponent as DeleteIcon} from "../../icons/white_busket.svg";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {LocalStorage} from "../../utils/utils";
import {useLocalStorageFetch} from "../../utils/hook";
import {BE_API, ROUTER} from "../../utils/config";

const EditCompanyListPage = () => {
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [customer] = useState(LocalStorage.getGuest());
    const [customerCompanies] = useLocalStorageFetch(
        'customerCompanies',
        [],
        BE_API.GET_COMPANIES_BY_CUSTOMER_ID(customer.ID)
    );

    if (isLoading) {
        return <Notification.Loading/>;
    }

    return (
        <Wrapper>
            {customerCompanies.map(
                company =>
                    <div key={company.ID}>
                        <Company company={company}/>
                        <EditBar>
                            <EditButton><DeleteIcon/></EditButton>
                            <Link to={ROUTER.EDIT_COMPANY.URL + '/' + company.ID}>
                                <PrimaryWideButton><EditIcon/><span>Company</span></PrimaryWideButton>
                            </Link>
                            <Link to={ROUTER.EDIT_MENU.URL + '/' + company.ID}>
                                <PrimaryWideButton><EditIcon/><span>Menu</span></PrimaryWideButton>
                            </Link>
                        </EditBar>

                    </div>)
            }
            <PrimaryWideButton>+ Add new company</PrimaryWideButton>
        < /Wrapper>
    )
};

export default EditCompanyListPage;