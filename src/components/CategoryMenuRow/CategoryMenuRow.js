import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryWrapper, TopCategoryItem, SliderStyle, BottomLine, Wrapper
} from "./CategoryMenuRow.style";

import {CategoryItem, MenuItem, RowSplitter} from "../../components";
import {CATEGORY_MAPPER, getCategoryOwnerId, getCategoryUniqueIds} from '../../utils/category';
import {getTopCategories} from '../../utils/category';
import {translate} from "../../utils/translation";
import {CategoryTitle} from "../../page/search-details/SearchDetails.style";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const CATEGORY_ROW_HEIGHT = 100;

const CategoryMenuRow = ({
                             showAllCategories = false,
                             menuItems = [],
                             showMenuItemAmount,
                         }) => {
    const [topCategories, setTopCategories] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);
    const [selectedTopCategoryIndex, setSelectedTopCategoryIndex] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});

    const onScrollPage = () => {
        if (getIsScrollDisabled()) {
            return;
        }

        const categoryTitles = document.getElementsByClassName(CATEGORY_TITLE_CLASS_NAME)

        Object.values(categoryTitles).forEach(ct => {
                const y = ct.offsetTop - window.scrollY - CATEGORY_ROW_HEIGHT;
                if (y < 120 && y > 20) {
                    const candidateCategoryId = +(ct.id.split('_')[1])

                    if (candidateCategoryId !== selectedCategory) {
                        setSelectedCategory(candidateCategoryId)
                    }
                }
            }
        )
    }

    const scrollTo = category_id => {
        disableScrollListener();

        const topOfElement = document.querySelector(`#category_${category_id}`).offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: topOfElement, behavior: "smooth"});

        enableScrollListener()
    }

    const changeCategory = useCallback(category_id => {
        setSelectedCategory(category_id);
        scrollTo(category_id);
    }, [selectedCategory]);


    const selectTopCategory = index => () => {
        setSelectedTopCategoryIndex(index);
        changeCategory(topCategories[index].ids[0])
    }

    useEffect(() => {
        document.addEventListener("scroll", onScrollPage)

        return () => {
            document.removeEventListener("scroll", onScrollPage);
        }
    }, [])


    useEffect(() => {

        if (!menuItems.length && !showAllCategories) {
            return
        }

        const uniqueCategoryIds = getCategoryUniqueIds(menuItems, showAllCategories);
        const availableTopCategories = getTopCategories(uniqueCategoryIds);
        console.log("TOP categories: ", availableTopCategories)
        setUniqueCategory(uniqueCategoryIds.map((id, index) => ({id, index})))
        setTopCategories(availableTopCategories)
        setSelectedTopCategoryIndex(0);
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
        <SwiperWrapper selectedCategory={selectedCategory}>
            {
                uniqueCategory?.map(category => (
                    <SwiperSlide key={category.id}>
                        <CategoryItem
                            category={CATEGORY_MAPPER[category.id]}
                            isSelected={selectedCategory.id === category.id}
                            clickHandler={() => {
                                changeCategory(category)
                                setSelectedTopCategoryIndex(getCategoryOwnerId(category.id, topCategories));
                            }}
                            itemsAmountPerCategory={showMenuItemAmount ? menuItems.filter(mi => mi.CATEGORY_ID === mi.CATEGORY_ID).length : 0}
                        />
                    </SwiperSlide>
                ))
            }
        </SwiperWrapper>
    ), [menuItems, selectedCategory]);

    const AllMenuItems = useMemo(() => {
        const ids = [];
        return menuItems?.map(mi => {
            const {CATEGORY_ID} = mi;

            if (ids.includes(CATEGORY_ID)) {
                return <MenuItem key={mi.ID} item={mi}/>
            }

            ids.push(CATEGORY_ID);

            return [
                <CategoryTitle
                    className={CATEGORY_TITLE_CLASS_NAME}
                    id={"category_" + CATEGORY_ID}
                    key={CATEGORY_MAPPER[CATEGORY_ID].title}
                >
                    {CATEGORY_MAPPER[CATEGORY_ID].title.toUpperCase()}
                </CategoryTitle>,
                <MenuItem key={mi.ID} item={mi}/>
            ];
        })?.flat()
    }, [menuItems]);

    return (
        <>
            <div style={{position: 'sticky', top: -1, zIndex: 10}}>
                <div style={{position: 'relative', top: 0, zIndex: 10, left: 0, right: 0}}>
                    <div style={{position: 'absolute', top: 0, zIndex: 10, left: -10, right: -10}}>
                        {/* Don't delete id and className as we use them to scroll handle */}
                        <Wrapper id="category-menu-row" className="category-menu-row-wrapper">
                            {TopCategories}
                            {SubCategories}
                        </Wrapper>
                    </div>
                    <RowSplitter height={'110px'}/>
                </div>
            </div>
            {AllMenuItems}
        </>
    )
}


const SwiperWrapper = ({selectedCategory, children}) => {
    const [swiper, setSwiper] = useState(null);

    const slideTo = category => {
        if (swiper && category?.index) swiper.slideTo(category.index)
    };

    useEffect(() => {
        slideTo(selectedCategory)
    }, [selectedCategory])

    return (
        <SliderStyle>
            {/*https://studio.swiperjs.com/play*/}
            <Swiper
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

function enableScrollListener(){
    setTimeout(() => {
        const domElement = document.getElementsByClassName("category-menu-row-wrapper")[0]
        domElement.classList.remove('stop-scroll')
    }, 2500);
}

function disableScrollListener(){
    if (getIsScrollDisabled()) {
        return;
    }

    //The only possible way to stop scroll listener when you triggerred scrollTo is adding class
    const domElement = document.getElementsByClassName("category-menu-row-wrapper")[0]
    domElement.classList.add('stop-scroll');
}

function getIsScrollDisabled(){
    const stopScroll = document.getElementsByClassName("stop-scroll");

    return !!stopScroll?.length
}



export default memo(CategoryMenuRow);