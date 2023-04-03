import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Wrapper} from "./EditMenu.style";
import {fetchData} from "../../utils/fetch";
import {CategoryMenuRow, EditMenuItem, Notification} from "../../components";
import {BE_API} from "../../utils/config";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../../features/request/requestSlice";

const EditMenuCompany = () => {
    const [menuItems, setMenuItems] = useState([]);
    const {companyId} = useParams();
    const url = BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(companyId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoading());

        fetchData(url)
            .then(res => {
                setMenuItems(res);
                dispatch(stopLoading());
            })
    }, [url])

    return (
        <>
            <Notification.Loading/>
            <Wrapper>
                <CategoryMenuRow menuItems={menuItems}/>
                {menuItems.map(item => <EditMenuItem menu={item} key={item.ID}/>)}
            </Wrapper>
        </>
    )
}

export default EditMenuCompany;