import React, {memo, useEffect, useMemo, useState} from 'react';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryWrapper, TopCategoryItem, SliderStyle, BottomLine, Wrapper
} from "./CategoryMenuRow.style";

import {CategoryItem, ContentContainer, RowSplitter} from "../../components";
import {CATEGORY_MAPPER, getCategoryUniqueIds} from '../../utils/category';
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
    const [categoryUniqueIds, setCategoryUniqueIds] = useState([]);
    const [selectedTopCategoryIndex, setSelectedTopCategoryIndex] = useState([]);

    const selectTopCategory = index => () => {
        setSelectedTopCategoryIndex(index);
        changeSubCategory(topCategories[index].ids[0])
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
        // changeSubCategory(_topCategories[0].ids[0])
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
        <SwiperWrapper selectedSubCategoryId={selectedSubCategoryId}>
            {
                categoryUniqueIds?.map(category_id => (
                    <SwiperSlide key={category_id}>
                        <CategoryItem
                            category={CATEGORY_MAPPER[category_id]}
                            isSelected={selectedSubCategoryId === category_id}
                            clickHandler={() => changeSubCategory(category_id)}
                            itemsAmountPerCategory={showMenuItemAmount ? menuItems.filter(mi => mi.CATEGORY_ID === mi.CATEGORY_ID).length : 0}
                        />
                    </SwiperSlide>
                ))
            }
        </SwiperWrapper>
    ), [menuItems, selectedSubCategoryId]);

    return (<div style={{position: 'sticky', top: -1, zIndex: 10}}>
        <div style={{position: 'relative', top: 0, zIndex: 10, left: 0, right: 0}}>
            <div style={{position: 'absolute', top: 0, zIndex: 10, left: -10, right: -10}}>
                <Wrapper className="category-menu-row-wrapper">
                    {TopCategories}
                    {SubCategories}
                </Wrapper>
            </div>
            <RowSplitter height={'100px'}/>
        </div>
    </div>)
}


const SwiperWrapper = ({selectedSubCategoryId, children}) => {
    const [swiper, setSwiper] = useState(null);

    const slideTo = index => {
        console.log('INDEX: ', index)
        if (swiper) swiper.slideTo(index - 1)
    };

    useEffect(() => {
        slideTo(selectedSubCategoryId)
    }, [selectedSubCategoryId])


    return (
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
                {children}
            </Swiper>
        </SliderStyle>
    )
}

export default memo(CategoryMenuRow);