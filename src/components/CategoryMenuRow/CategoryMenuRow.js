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

const CategoryMenuRow = ({menuItems = [] , changeCategory = () => {}}) => {
    const categoryIds = [...new Set(menuItems.map(mi => mi.CATEGORY_ID))];
    const categories = categoryIds
        .map(number => CATEGORY_MAPPER[number])
        .map(category => (
            <SwiperSlide key={category.id}>
                <Link to="">
                    <CategoryItem category={category} clickHandler={() => changeCategory(category.id)}/>
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
                    {categories}
                </Swiper>
            </Flex>
        </Content>
    );
};

export default CategoryMenuRow;