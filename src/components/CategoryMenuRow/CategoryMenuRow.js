import React from 'react';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {CATEGORY_MAPPER} from '../../utils/config';
import {
    Content,
    Flex
} from "./CategoryMenuRow.style";

import {CategoryItem} from "../../components";

const CategoryMenuRow = (props) => {
    // We don't need it for now.
    // const [categories] = useLocalStorageFetch(
    //     'category',
    //     [],
    //     BE_API.GET_ALL_CATEGORIES_ID_FOR_COMPANY(1)
    // )

    const categories = props.categories.map(number => CATEGORY_MAPPER[number]);

    const getCategoryItems = () => categories.map(category => (
        <SwiperSlide key={category.title} >
            <Link to="">
                <CategoryItem category={category}/>
            </Link>
        </SwiperSlide>
    ));

    return (
        <Content>
            <Flex>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    className="category-slider"
                >
                    {getCategoryItems()}
                </Swiper>
            </Flex>
        </Content>
    );
};

export default CategoryMenuRow;