import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Wrapper} from "./EditMenu.style";
import {fetchData} from "../../utils/fetch";
import {
    CategoryMenuRow,
    ContentContainer,
    EditMenuRow,
    Notification,
    PrimaryWideButton,
    RowSplitter
} from "../../components";
import {BE_API} from "../../utils/config";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../../features/request/requestSlice";

const EditMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(menuItems[0]?.CATEGORY_ID)
    const selectedMenuItems = selectedCategory && menuItems.filter(mi => mi.CATEGORY_ID === selectedCategory) || []

    const {companyId} = useParams();
    const url = BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(companyId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoading());
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(url)
            .then(res => {
                setMenuItems(res);
                setSelectedCategory(res[0]?.CATEGORY_ID)
                dispatch(stopLoading());
            })
    }, [url])

    return (
        <>
            <Notification.Loading/>
            <Wrapper>
                <CategoryMenuRow menuItems={menuItems} changeCategory={id => setSelectedCategory(id)}/>
                <RowSplitter height={'15px'} />
                <ContentContainer>
                    {selectedMenuItems.map(item => <EditMenuRow title={item.NAME} key={item.ID}/>)}
                </ContentContainer>
                <PrimaryWideButton>Add menu item</PrimaryWideButton>
            </Wrapper>
        </>
    )
}

export default EditMenu;