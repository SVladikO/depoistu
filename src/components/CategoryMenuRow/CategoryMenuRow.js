import React, {memo, useEffect, useState} from 'react';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryWrapper,
    TopCategoryItem,
    SliderStyle, BottomLine
} from "./CategoryMenuRow.style";

import {CategoryItem, ContentContainer} from "../../components";
import {CATEGORY_MAPPER} from '../../utils/category';
import {getTopCategories} from '../../utils/category';
import {translate} from "../../utils/translation";

const CategoryMenuRow = ({
                             showAllCategories = false,
                             menuItems = [],
                             showMenuItemAmount,
                             selectedCategoryId,
                             changeCategory = () => {
                             },
                         }) => {
    const [topCategories, setTopCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedTopCategoryIndex, setSelectedTopCategoryIndex] = useState([]);

    const selectTopCategory = index => () => {
        setSelectedTopCategoryIndex(index);
        setSubCategories(topCategories[index])
        changeCategory(topCategories[index].ids[0])
    }

    const renderTopCategories = () => (
        <div>
            <BottomLine/>
            <TopCategoryWrapper>
                {
                    topCategories.map((tc, index) => (
                        <TopCategoryItem
                            key={tc.key}
                            isSelected={index === selectedTopCategoryIndex}
                            onClick={selectTopCategory(index)}
                        >
                            {translate(tc.translationKey)}
                        </TopCategoryItem>
                    ))
                }
            </TopCategoryWrapper>
        </div>
    )

    const renderSubCategories = () => (
        <SliderStyle>
            {/*https://studio.swiperjs.com/play*/}
            <Swiper
                modules={[Scrollbar, FreeMode]}
                scrollbar={{enabled: true, hide: true}}
                freeMode={{enabled: true, momentum: false, momentumRatio: 1, momentumVelocityRatio: 1}}
                slidesPerView={3}
                spaceBetween={10}
                className="category-slider"
            >
                {subCategories?.ids?.map((category_id) => (
                    <SwiperSlide key={category_id}>
                        <CategoryItem
                            category={CATEGORY_MAPPER[category_id]}
                            clickHandler={() => changeCategory(category_id)}
                            isSelected={selectedCategoryId === category_id}
                            itemsAmountPerCategory={showMenuItemAmount ? menuItems.filter(mi => mi.CATEGORY_ID === category_id).length : 0}
                        />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </SliderStyle>
    );


    useEffect(() => {
        if (!menuItems.length && !showAllCategories) {
            return
        }

        const categoryIds = getCategoryIds(menuItems, showAllCategories);
        const tc = getTopCategories(categoryIds);

        setTopCategories(tc)
        setSubCategories(tc[0])
        setSelectedTopCategoryIndex(0);
        setSubCategories(tc[0])
        changeCategory(tc[0].ids[0])

    }, [menuItems]);

    return (
        <ContentContainer>
            {renderTopCategories()}
            {renderSubCategories()}
        </ContentContainer>
    )
}

const getCategoryIds = (menuItems, showAllCategories) => {
    return [
        ...new Set(
            [
                ...menuItems.map(mi => mi.CATEGORY_ID),
                ...(showAllCategories ? Object.keys(CATEGORY_MAPPER).map(id => +id) : [])
            ]
        ),
    ]
}

export default memo(CategoryMenuRow);