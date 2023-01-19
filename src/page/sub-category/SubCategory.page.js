import React from 'react';
import {useParams} from "react-router-dom";

import {
    Content,
    Flex
} from "./SubCategory.style";

import {MenuItem} from "../../components";
import {fetchData} from "../../fetch";
import {BE_API} from "../../utils/config";
import {useLocalStorageFetch} from "../../hook";

const SubCategoryPage = () => {
    const {categoryId} = useParams();
    const [menu_items] = useLocalStorageFetch(
        'category' + categoryId,
        [],
        onSuccess =>
            fetchData(BE_API.GET_ALL_MENU_FOR_COMPANY_FOR_CATEGORY(1, categoryId))
                .then(res => onSuccess(res))
                .catch(e => console.log(e))
    );

    return (
            <Flex>
                {menu_items.map((menuItem, index) => <MenuItem key={index} item={menuItem} />)}
            </Flex>
    );
};

export default SubCategoryPage;