import React from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {useLocalStorageFetch} from '../../utils/hook';
import {BE_API, ROUTER, CATEGORY_MAPPER} from '../../utils/config';
import {
    Content,
    Flex
} from "./CategoryMenuRow.style";

import {CategoryItem} from "../../components";

const CategoryMenuRow = () => {
    const [categories] = useLocalStorageFetch(
        'category',
        [],
        BE_API.GET_ALL_CATEGORIES_ID_FOR_COMPANY(1)
    )

    const getCategoryItem = category => ( <SwiperSlide> <CategoryItem key={category.title} title={category.title}> </CategoryItem> </SwiperSlide> );

    return (
        <Content>
            <Flex>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    className="category-slider"
                >
                {
                    categories.map(category_id => (
                        <Link key={category_id.toString()} to="">
                            {getCategoryItem(CATEGORY_MAPPER[category_id])}
                        </Link>
                    ))
                }
                </Swiper>
            </Flex>
        </Content>
    );
};

export default CategoryMenuRow;