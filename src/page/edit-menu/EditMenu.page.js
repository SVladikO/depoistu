import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Wrapper} from "./EditMenu.style";
import {fetchData} from "../../utils/fetch";
import {
    CategoryMenuRow,
    ContentContainer,
    EditMenuRow,
    Notification,
    PrimaryButton,
    RowSplitter
} from "../../components";
import {BE_API} from "../../utils/config";
import {useDispatch, useSelector} from "react-redux";
import {startLoading, stopLoading} from "../../features/request/requestSlice";

const EditMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [requestError, setRequestError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(menuItems[0]?.CATEGORY_ID)

    const isLoading = useSelector(state => state.request.value.isLoading);

    const dispatch = useDispatch();
    const {companyId} = useParams();
    const selectedMenuItems = selectedCategory && menuItems.filter(mi => mi.CATEGORY_ID === selectedCategory) || []

    const url = BE_API.GET_MENU_ITEMS_BY_COMPANY_ID(companyId);

    useEffect(() => {
        dispatch(startLoading());
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(url)
            .then(res => {
                setMenuItems(res);
                setSelectedCategory(res[0]?.CATEGORY_ID)
                setTimeout(() => dispatch(stopLoading()), 1000);
            }).catch(e => {
                setTimeout(() => dispatch(stopLoading()), 1000);
                setRequestError(e.message)
            })

    }, [url])

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (requestError) {
        return <Notification.Error message={requestError}/>;
    }

    return (
        <>
            <Wrapper>
                <CategoryMenuRow
                    showMenuItemAmount
                    menuItems={menuItems}
                    changeCategory={id => setSelectedCategory(id)}
                />
                <RowSplitter height={'15px'} />
                <ContentContainer>
                    {selectedMenuItems.map(item => <EditMenuRow title={item.NAME} key={item.ID}/>)}
                </ContentContainer>
                <PrimaryButton isWide>Add menu item</PrimaryButton>
            </Wrapper>
        </>
    )
}

export default EditMenu;