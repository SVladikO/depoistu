import React from 'react';
import {useParams} from "react-router-dom";

import {
    Content,
    Flex
} from "./SubCategory.style";

import {ProductCard} from "../../components";
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
    )

    return (
        <Content>
            <Flex>
                {menu_items.map((c, index) =>
                    <ProductCard key={index}
                                 item={{
                                     title: c.name,
                                     image: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
                                     discont: '-10',
                                     rating: '4.5',
                                     buttons: [
                                         {price: 20, size: 1},
                                         {price: 20, size: 2},
                                         {price: 30, size: 3},
                                     ],
                                 }}
                    />)}
            </Flex>
        </Content>
    );
};

export default SubCategoryPage;