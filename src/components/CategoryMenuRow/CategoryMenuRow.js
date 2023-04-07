import React, {useState} from 'react';
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

const CategoryMenuRow = ({menuItems = [], showMenuItemAmount = {}}) => {
    const categoryIds = [...new Set(menuItems.map(mi => mi.CATEGORY_ID))];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const CATEGORY_ITEM_AMOUNT = {};

    categoryIds.forEach(categoryId => {
        CATEGORY_ITEM_AMOUNT[categoryId] = menuItems.filter(mi => mi.CATEGORY_ID === categoryId).length;
    });

    const categories = categoryIds
        .map(number => CATEGORY_MAPPER[number])
        .map((category,i) => (
            <SwiperSlide key={category.id}>
                <Link to="">
                    <CategoryItem
                        itemsAmountPerCategory = {showMenuItemAmount ? CATEGORY_ITEM_AMOUNT[category.id] : 0}
                        clickHandler={() => setSelectedIndex(i)}
                        isSelected={selectedIndex === i}
                        category={category}/>
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