import React, {memo, useEffect, useMemo, useState} from 'react';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryWrapper, TopCategoryItem, SliderStyle, BottomLine, Wrapper
} from "./CategoryMenuRow.style";

import {CategoryItem, RowSplitter} from "../../components";
import {CATEGORY_MAPPER, getCategoryUniqueIds} from '../../utils/category';
import {getTopCategories} from '../../utils/category';
import {translate} from "../../utils/translation";

const CategoryMenuRow = ({
                             showAllCategories = false,
                             menuItems = [],
                             showMenuItemAmount,
                             selectedCategoryId,
                             changeCategory,
                         }) => {
    const [topCategories, setTopCategories] = useState([]);
    const [categoryUniqueIds, setCategoryUniqueIds] = useState([]);
    const [selectedTopCategoryIndex, setSelectedTopCategoryIndex] = useState([]);

    const selectTopCategory = index => () => {
        setSelectedTopCategoryIndex(index);
        changeCategory(topCategories[index].ids[0])
    }

    useEffect(() => {

        if (!menuItems.length && !showAllCategories) {
            return
        }

        const _categoryUniqueIds = getCategoryUniqueIds(menuItems, showAllCategories);
        const availableTopCategories = getTopCategories(_categoryUniqueIds);

        setCategoryUniqueIds(_categoryUniqueIds)
        setTopCategories(availableTopCategories)
        setSelectedTopCategoryIndex(0);
        // changeCategory(_topCategories[0].ids[0])
    }, [menuItems]);


    const TopCategories = useMemo(() => (<div>
        <BottomLine/>
        <TopCategoryWrapper>
            {topCategories.map((tc, index) => (<TopCategoryItem
                key={tc.key}
                isSelected={index === selectedTopCategoryIndex}
                onClick={selectTopCategory(index)}
            >
                {translate(tc.translationKey)}
            </TopCategoryItem>))}
        </TopCategoryWrapper>
    </div>), [selectedTopCategoryIndex, topCategories])

    const SubCategories = useMemo(() => (
        <SwiperWrapper selectedCategoryId={selectedCategoryId}>
            {
                categoryUniqueIds?.map(category_id => (
                    <SwiperSlide key={category_id}>
                        <CategoryItem
                            category={CATEGORY_MAPPER[category_id]}
                            isSelected={selectedCategoryId === category_id}
                            clickHandler={() => changeCategory(category_id)}
                            itemsAmountPerCategory={showMenuItemAmount ? menuItems.filter(mi => mi.CATEGORY_ID === mi.CATEGORY_ID).length : 0}
                        />
                    </SwiperSlide>
                ))
            }
        </SwiperWrapper>
    ), [menuItems, selectedCategoryId]);

    return (<div style={{position: 'sticky', top: -1, zIndex: 10}}>
        <div style={{position: 'relative', top: 0, zIndex: 10, left: 0, right: 0}}>
            <div style={{position: 'absolute', top: 0, zIndex: 10, left: -10, right: -10}}>
                <Wrapper className="category-menu-row-wrapper">
                    {TopCategories}
                    {SubCategories}
                </Wrapper>
            </div>
            <RowSplitter height={'110px'}/>
        </div>
    </div>)
}


const SwiperWrapper = ({selectedCategoryId, children}) => {
    const [swiper, setSwiper] = useState(null);

    const slideTo = index => {
        if (swiper) swiper.slideTo(index - 1)
    };

    useEffect(() => {
        slideTo(selectedCategoryId)
    }, [selectedCategoryId])

    return (
        <SliderStyle>
            {/*https://studio.swiperjs.com/play*/}
            <Swiper
                activeIndex={selectedCategoryId}
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
                {children}
            </Swiper>
        </SliderStyle>
    )
}

export default memo(CategoryMenuRow);