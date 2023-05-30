import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {Content, Flex} from "./CategoryMenuRow.style";

import {CategoryItem} from "../../components";
import {CATEGORY_MAPPER} from '../../utils/config';

const CategoryMenuRow = ({
                             showAllCategories = false,
                             menuItems = [],
                             showMenuItemAmount,
                             selectedCategoryId,
                             changeCategory = () => {},
                         }) => {

    const menuCategoryIds = [
        ...new Set(
            [
                ...menuItems.map(mi => mi.CATEGORY_ID),
                ...(showAllCategories ? Object.keys(CATEGORY_MAPPER).map(id => +id) : [])
            ]
        ),

    ];
    console.log(2222, menuCategoryIds)

    const categories = menuCategoryIds.map((category_id) => (
        <SwiperSlide key={category_id}>
            <CategoryItem
                category={CATEGORY_MAPPER[category_id]}
                clickHandler={() => changeCategory(category_id)}
                isSelected={selectedCategoryId === category_id}
                itemsAmountPerCategory={showMenuItemAmount ? menuItems.filter(mi => mi.CATEGORY_ID === category_id).length : 0}
            />
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