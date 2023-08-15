import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryWrapper, TopCategoryItem, SliderStyle, BottomLine, Wrapper
} from "./CategoryMenuRow.style";

import {CategoryItem, MenuItem, PrimaryButton, RowSplitter} from "../../components";
import {CATEGORY_MAPPER, getCategoryOwnerId, getCategoryUniqueIds} from '../../utils/category';
import {getTopCategories} from '../../utils/category';
import {translate, TRANSLATION} from "../../utils/translation";
import {CategoryTitle} from "../../page/search-details/SearchDetails.style";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {URL} from "../../utils/config";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useScrollUp} from "../../utils/hook";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const CATEGORY_ROW_HEIGHT = 100;
const CATEGORY_ID_PREFIX = 'category_'
const generateTagId = (id, index) => `${CATEGORY_ID_PREFIX}${id}_${index}`
const getCategoryIndex = (categoryId, uniqueCategories) => uniqueCategories.find(uc => uc.id === categoryId).index;

const CategoryMenuRow = ({
                             showAllCategories = false,
                             menuItems = [],
                             showMenuItemAmount,
                             withEditIcon,
                             editPage = false,
                         }) => {
    const navigate = useNavigate();
    const {companyId} = useParams();
    const [topCategories, setTopCategories] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState();
    const [selectedTopCategoryIndex, setSelectedTopCategoryIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState({});

    useScrollUp()

    const onScrollPage = () => {
        if (getIsScrollDisabled()) {
            return;
        }

        const categoryTitleTags = document.getElementsByClassName(CATEGORY_TITLE_CLASS_NAME)

        Object.values(categoryTitleTags).forEach(element => {
                const y = element.offsetTop - window.scrollY - CATEGORY_ROW_HEIGHT;
                if (y < 120 && y > 10) {

                    const [extra, candidateCategoryId, candidateCategoryIndex] = element.id.split('_').map(Number)

                    if (candidateCategoryId !== selectedCategory.id) {
                        setSelectedCategory({id: candidateCategoryId, index: candidateCategoryIndex})
                    }
                }
            }
        )
    }

    const scrollTo = category => {
        disableScrollListener();
        const categoryTitleTag = document.querySelector('#' + generateTagId(category.id, category.index));

        //This check for EditMenuPage no menu
        if (!categoryTitleTag) {
            return
        }

        const topOfElement = categoryTitleTag.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: topOfElement, behavior: "smooth"});

        enableScrollListener()
    }

    const changeCategory = useCallback(category => {
        setSelectedCategory(category);
        scrollTo(category);
    }, [selectedCategory]);


    const selectTopCategory = index => () => {
        setSelectedTopCategoryIndex(index);
        const firstCategoryIdInTop = topCategories[index].ids[0];
        const candidateCategory = uniqueCategories.find(category => category.id === firstCategoryIdInTop)
        changeCategory(candidateCategory)
    }

    const navigateToEditMenuItemPage = menuItem => () => {
        LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, menuItem);
        return navigate(URL.EDIT_MENU_ITEM)
    }


    useEffect(() => {
        document.addEventListener("scroll", onScrollPage)

        return () => {
            document.removeEventListener("scroll", onScrollPage);
        }
    }, [])

    useEffect(() => {
        //Very important to use undefined as initial value to menuItems SearchDetailsPage, EditMenuPage.
        if (!menuItems && !showAllCategories) {
            return
        }

        const uniqueCategoryIds = getCategoryUniqueIds(menuItems, showAllCategories);
        const idIndexCategories = uniqueCategoryIds.map((id, index) => ({id, index}))

        setUniqueCategories(idIndexCategories)
        const availableTopCategories = getTopCategories(uniqueCategoryIds);
        setTopCategories(availableTopCategories)

        //Edit page will have error without selected category by default
        if (editPage) {
            setSelectedCategory(idIndexCategories[0])
        }
    }, [menuItems, showAllCategories]);

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
                uniqueCategories?.map(category => (
                    <SwiperSlide key={category.id}>
                        <CategoryItem
                            category={CATEGORY_MAPPER[category.id]}
                            isSelected={selectedCategory.id === category.id}
                            clickHandler={() => {
                                changeCategory(category)
                                setSelectedTopCategoryIndex(getCategoryOwnerId(category.id, topCategories));
                            }}
                            itemsAmountPerCategory={
                                showMenuItemAmount
                                    ? menuItems.filter(mi => mi.CATEGORY_ID === category.id).length
                                    : 0
                            }
                        />
                    </SwiperSlide>
                ))
            }
        </SwiperWrapper>
    ), [uniqueCategories, selectedCategory, showAllCategories]);

    const AllMenuItems = useMemo(() => {
        const ids = [];

        const categoryIndexIds = getCategoryUniqueIds(menuItems, showAllCategories).map((id, index) => ({id, index}))

        return menuItems
            ?.sort((a, b) => a.CATEGORY_ID - b.CATEGORY_ID)
            ?.map(menu_item => {
                const {CATEGORY_ID} = menu_item;

                const MenuItemComponent = <MenuItem
                    key={menu_item.ID}
                    item={menu_item}
                    withEditIcon={withEditIcon}
                    onEditClick={navigateToEditMenuItemPage(menu_item)}
                />

                if (ids.includes(CATEGORY_ID)) {
                    return MenuItemComponent;
                }

                ids.push(CATEGORY_ID);

                return [
                    <CategoryTitle
                        className={CATEGORY_TITLE_CLASS_NAME}
                        id={generateTagId(CATEGORY_ID, getCategoryIndex(CATEGORY_ID, categoryIndexIds))}
                        key={CATEGORY_MAPPER[CATEGORY_ID].title}
                    >
                        {CATEGORY_MAPPER[CATEGORY_ID].title.toUpperCase()}
                    </CategoryTitle>,
                    MenuItemComponent
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
            {
                editPage &&
                <>
                    <RowSplitter height={'15px'}/>
                    <Link to={`${URL.ADD_MENU_ITEM}?categoryId=${selectedCategory.id}&companyId=${companyId}`}>
                        <PrimaryButton
                            isWide>{translate(TRANSLATION.PAGE.EDIT_MENU.BUTTON.ADD_MENU_ITEM)}</PrimaryButton>
                    </Link>
                </>
            }
        </>
    )
}


const SwiperWrapper = ({selectedCategory, children}) => {
    const [swiper, setSwiper] = useState(null);

    const slideTo = category => {
        // we should let 0 pass if too.
        if (swiper && (category?.index || category?.index === 0)) {
            swiper.slideTo(category.index)
        }
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

function enableScrollListener() {
    setTimeout(() => {
        const domElement = document.getElementsByClassName("category-menu-row-wrapper")[0]
        domElement.classList.remove('stop-scroll')
    }, 2500);
}

function disableScrollListener() {
    if (getIsScrollDisabled()) {
        return;
    }

    //The only possible way to stop scroll listener when you triggerred scrollTo is adding class
    const domElement = document.getElementsByClassName("category-menu-row-wrapper")[0]
    domElement.classList.add('stop-scroll');
}

function getIsScrollDisabled() {
    const stopScroll = document.getElementsByClassName("stop-scroll");

    return !!stopScroll?.length
}


export default memo(CategoryMenuRow);