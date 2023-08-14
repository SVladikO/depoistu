import React, {memo, useEffect, useMemo, useState} from 'react';
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

import {CategoryItem, ContentContainer, RowSplitter} from "../../components";
import {CATEGORY_MAPPER} from '../../utils/category';
import {getTopCategories} from '../../utils/category';
import {translate} from "../../utils/translation";

const CategoryMenuRow = ({
                             showAllCategories = false,
                             menuItems = [],
                             showMenuItemAmount,
                             selectedSubCategoryId,
                             changeSubCategory,
                         }) => {
    const [topCategories, setTopCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedTopCategoryIndex, setSelectedTopCategoryIndex] = useState([]);

    const selectTopCategory = index => () => {
        setSelectedTopCategoryIndex(index);
        setSubCategories(topCategories[index])
        changeSubCategory(topCategories[index].ids[0])
    }

    const TopCategories = useMemo(() => (
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
    ), [selectedTopCategoryIndex, topCategories])

    const [swiper, setSwiper] = useState(null);

    const slideTo = index => {
        if (swiper) swiper.slideTo(index)
    };

    useEffect(() => {
        slideTo(selectedSubCategoryId)
    }, [selectedSubCategoryId])


    const SubCategories = useMemo(() => (
        <SliderStyle>
            {/*https://studio.swiperjs.com/play*/}
            <Swiper
                activeIndex={selectedSubCategoryId}
                modules={[Scrollbar, FreeMode]}
                scrollbar={{enabled: true, hide: true}}
                onSwiper={setSwiper}
                freeMode={{
                    enabled: true,
                    sticky: false,
                    momentum: true,
                    momentumBounce: true,
                    momentumRatio: 1,
                    momentumVelocityRatio: 1
                }}
                slidesPerView={3}
                spaceBetween={10}
                className="category-slider"
            >
                {subCategories?.ids?.map((category_id) => {
                    return <SwiperSlide key={category_id}>
                        <CategoryItem
                            category={CATEGORY_MAPPER[category_id]}
                            clickHandler={() => changeSubCategory(category_id)}
                            isSelected={selectedSubCategoryId === category_id}
                            itemsAmountPerCategory={showMenuItemAmount ? menuItems.filter(mi => mi.CATEGORY_ID === category_id).length : 0}
                        />
                    </SwiperSlide>
                })
                }
            </Swiper>
        </SliderStyle>
    ), [subCategories, selectedSubCategoryId]);


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
        changeSubCategory(tc[0].ids[0])

    }, [menuItems]);

    return (
        <div style={{position: 'sticky', top: -1, zIndex: 10}}>
            <div style={{position: 'relative', top: 0, zIndex: 10, left: 0, right: 0}}>
                <div style={{position: 'absolute', top: 0, zIndex: 10, left: -10, right: -10}}>
                    <ContentContainer borderRadius={'0 0 0 0'}>
                        {TopCategories}
                        {SubCategories}
                    </ContentContainer>
                </div>
                <RowSplitter height={'100px'}/>
            </div>
        </div>
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