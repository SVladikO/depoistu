import React from 'react';
import {Link} from "react-router-dom";

import {useLocalStorageFetch} from '../../hook';
import {BE_API, ROUTER, CATEGORY_MAPPER} from '../../utils/config';
import {
    Content,
    Flex
} from "./Category.style";

import {
    CategoryItem,
    Load
} from "../../components";
import Error from "../../components/Error/Error";

const CategoryPage = () => {
    const [categories] = useLocalStorageFetch(
        'category',
        [],
        BE_API.GET_ALL_CATEGORIES_ID_FOR_COMPANY(1)
    )

    const getCategoryItem = category => <CategoryItem key={category.title} title={category.title}>{
        <category.icon/>}</CategoryItem>;

    return (
        <Content>
            <Load/>
            <Error/>
            <Flex>
                {
                    categories.map(category_id => (
                        <Link key={category_id} to={ROUTER.SUB_CATEGORY.URL + '/' + category_id}>
                            {getCategoryItem(CATEGORY_MAPPER[category_id])}
                        </Link>
                    ))
                }
            </Flex>
        </Content>
    );
};

export default CategoryPage;