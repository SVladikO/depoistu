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

const CategoryMenuRow = ({
                             menuItems = [],
                             changeCategory = () => {}
                         }) => {
    const categoryIds = [...new Set(menuItems.map(mi => mi.CATEGORY_ID))];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const categories = categoryIds
        .map(number => CATEGORY_MAPPER[number])
        .map((category, index) => (
            <SwiperSlide key={category.id}>
                <CategoryItem
                    count={menuItems.filter(mi => mi.CATEGORY_ID === category.id).length}
                    clickHandler={() => setSelectedIndex(index)} selected={selectedIndex === index}
                    category={category}/>
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