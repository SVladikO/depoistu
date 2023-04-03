import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Wrapper} from "./EditMenu.style";
import {fetchData} from "../../utils/fetch";
import {EditMenuItem, CategoryMenuRow} from "../../components";
import {BE_API,CATEGORY_MAPPER} from "../../utils/config";

const EditMenuCompany = () => {
    const [menuItems, setMenuItems] = useState([]);
    const {companyId} = useParams();
    const url = BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(companyId);

    useEffect(() => {
        fetchData(url)
            .then(res => {
                setMenuItems(res);
            })
    }, [url])

    return (
        <Wrapper>
            <CategoryMenuRow menuItems={menuItems}/>
            {menuItems.map(item => <EditMenuItem menu={item} key={item.ID}/>)}
        </Wrapper>
    )
}

export default EditMenuCompany;