import React, {memo, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Content, TopCategoryWrapper, TopCategoryItem} from "./CategoryMenuRow.style";

import {CategoryItem} from "../../components";
import {CATEGORY_MAPPER} from '../../utils/category';
import {getTopCategories} from '../../utils/category';
import {resolveTranslation} from "../../utils/translation";

const CategoryMenuRow = ({
                             showAllCategories = false,
                             menuItems = [],
                             showMenuItemAmount,
                             selectedCategoryId,
                             changeCategory = () => {},
                         }) => {
    const [topCategories, setTopCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const menuCategoryIds = [
            ...new Set(
                [
                    ...menuItems.map(mi => mi.CATEGORY_ID),
                    ...(showAllCategories ? Object.keys(CATEGORY_MAPPER).map(id => +id) : [])
                ]
            ),

        ];

    useEffect(() => {
        const tc = getTopCategories(menuCategoryIds);
        setTopCategories(tc)
        setSubCategories(tc[0])
        debugger;

    }, [menuItems]);

    console.log(111, {topCategories});
    console.log(222, {subCategories});

    const categories = subCategories?.ids?.map((category_id) => (
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
            <div>
                <TopCategoryWrapper>
                    {topCategories.map(tc => <TopCategoryItem key={tc.key}>{resolveTranslation(tc.translationKey)}</TopCategoryItem>)}
                </TopCategoryWrapper>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    className="category-slider"
                >
                    {categories}
                </Swiper>
            </div>
        </Content>
    );
};

export default memo(CategoryMenuRow);