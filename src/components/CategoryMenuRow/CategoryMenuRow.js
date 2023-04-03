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

const CategoryMenuRow = ({menuItems = []}) => {
    const categoryIds = [...new Set(menuItems.map(mi => mi.CATEGORY_ID))];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const categories = categoryIds
        .map(number => CATEGORY_MAPPER[number])
        .map((category,i) => (
            <SwiperSlide key={category.id}>
                <Link to="">
                    <CategoryItem count={Object.values(category.title).length} clickHandler={() => setSelectedIndex(i)} selected={selectedIndex === i} category={category}/>
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