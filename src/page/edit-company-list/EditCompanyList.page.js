import {Link} from "react-router-dom";

import {EditBar} from "./EditCompanyList.style";

import {Company, Notification, PrimaryWideButton, PrimaryWithIconButton} from "../../components";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {LocalStorage} from "../../utils/utils";
import {BE_API, ROUTER} from "../../utils/config";
import {useLocalStorageFetch} from "../../utils/hook";

const EditCompanyListPage = () => {
    const isLoading = useSelector(state => state.request.value.isLoading);
    const [customer] = useState(LocalStorage.getCustomer());
    const [customerCompanies] = useLocalStorageFetch(
        'customerCompanies',
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