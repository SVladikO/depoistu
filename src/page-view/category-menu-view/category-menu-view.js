import React, {memo, useEffect, useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryItem,
    BgWrapper,
    SubCategoryWrapper
} from "./category-menu-view.style";

import CategoryTitle from "./view/top-category-title/top-category-title";
import {SubCategoryItem, MenuItem, RowSplitter, HorizontalSwiper} from "components";
import {addEditMenuItemCandidate} from 'features/editMenu/editMenuSlice';

import {URL} from "utils/config";
import {translate, TRANSLATION as TR} from "utils/translation";
import {CATEGORY_ID_MAPPER_AS_OBJECT, TOP_CATEGORIES} from 'utils/category';
import {
    enableScrollListener,
    FixTop,
    generateTagId,
    disableScrollListener,
    getIsScrollDisabled,
    CATEGORY_TITLE_CLASS_NAME,
    CATEGORY_CLASSNAME
} from "./utils";

const LAST_EDITED_CLASSNAME = 'last_edited_menu_item';

export const CATEGORY_ROW_HEIGHT = 112;

let indexCalculator = 0;
let categoryIdIndexMapper = {};

const CategoryMenuView = (props) => {
    const {menuItems, isHideFixedTop = false} = props
    const dispatch = useDispatch()
    const navigate = useNavigate();
    //duplication
    const isCurrentPageEqual = url => window.location.pathname === url;
    const [selectedTopCategoryId, setSelectedTopCategoryId] = useState();
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState();
    const [selectedMenuItemId, setSelectedMenuItemId] = useState();
    const menuItemCandidateToEdit = useSelector(state => state.editMenu.editMenuItemCandidate)

    const onScrollPage = () => {
        if (getIsScrollDisabled()) {
            return;
        }

        const categoryTitleTags = document.getElementsByClassName(CATEGORY_TITLE_CLASS_NAME)
        Object.values(categoryTitleTags).forEach(element => {
                const y = element.offsetTop - window.scrollY - CATEGORY_ROW_HEIGHT;

                if (y < 60 && y > 0) {
                    let [HeyHowAreYou, categoryId, topCategoryId] = element.id.split('_').map(Number);
                    if (categoryId !== selectedSubCategoryId) {
                        setSelectedSubCategoryId(categoryId)
                        setSelectedTopCategoryId(topCategoryId);
                    }
                }
            }
        )
    }

    const scrollTo = (categoryId, topCategoryId) => {
        const categoryTitleTag = document.querySelector('#' + generateTagId(categoryId, topCategoryId));

        if (!categoryTitleTag) {
            return
        }

        disableScrollListener();

        const topOfElement = categoryTitleTag.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: topOfElement, behavior: "smooth"});
        enableScrollListener()
    }

    const onChangeTopCategory = (topCategoryId, categoryId) => () => {
        setSelectedSubCategoryId(categoryId)
        setSelectedTopCategoryId(topCategoryId);
        scrollTo(categoryId, topCategoryId)
    }

    const navigateToEditMenuItemPage = menuItem => {
        return () => {
            dispatch(addEditMenuItemCandidate(menuItem))
            setTimeout(() => {
                navigate(URL.EDIT_MENU_ITEM)
            }, 0)
        }
    }

    const renderTopCategory = ({topCategoryKey, topCategoryIndex, categoryId}) => (
        <SwiperSlide key={topCategoryIndex}>
            <TopCategoryItem
                className="TopCategoryItem"
                isSelected={topCategoryIndex === selectedTopCategoryId}
                onClick={onChangeTopCategory(topCategoryIndex, categoryId)}
            >
                {translate(TR.TOP_CATEGORIES[topCategoryKey]).toUpperCase()}
            </TopCategoryItem>
        </SwiperSlide>
    )

    const renderSubCategory = (categoryId, topCategoryIndex, subCategoryIndex) => {
        return (
            <SwiperSlide key={subCategoryIndex}>
                <SubCategoryItem
                    title={CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title}
                    isSelected={+selectedSubCategoryId === +categoryId}
                    clickHandler={() => {
                        setSelectedTopCategoryId(topCategoryIndex)
                        setSelectedSubCategoryId(categoryId)
                        scrollTo(categoryId, topCategoryIndex)
                    }}
                />
            </SwiperSlide>
        )
    };


    const renderMenuItem = (mi) => (
        <div
            key={`menu_item_${mi.id}`}
            className={mi.id === menuItemCandidateToEdit?.id ? LAST_EDITED_CLASSNAME : ''}
        >
            <MenuItem
                {...props}
                item={mi}
                onEditClick={navigateToEditMenuItemPage(mi)}
                isSelected={mi.id === selectedMenuItemId}
                onSelectMenuItem={() => setSelectedMenuItemId(mi.id)}
            />
        </div>
    )

    const topCategories = []; // Contain array of top category components
    const subCategories = []; // Contain array of sub category components
    const resultMenuItems = []; // Contain array of category title, menu items

    // TOP_CATEGORIES contain uniq array of sub categories per category
    Object.keys(TOP_CATEGORIES).forEach((topCategoryKey) => {
        let wasTopSet = false;

        // We show top category per menu_items.
        const topIndex = topCategories.length;

        TOP_CATEGORIES[topCategoryKey].forEach(categoryId => {
            const items = menuItems.filter(menuItem => menuItem.category_id === categoryId)
            // No items nothing to do
            if (!items.length) {
                return
            }

            if (!wasTopSet) {
                wasTopSet = true;
                topCategories.push({topCategoryKey, topCategoryIndex: topIndex, categoryId});
            }

            // We need categoryIdIndexMapper to handle sub category scroll when you scroll vertically
            if (categoryIdIndexMapper[categoryId] === undefined) {
                categoryIdIndexMapper[categoryId] = indexCalculator++;
            }

            subCategories.push(renderSubCategory(categoryId, topIndex, categoryIdIndexMapper[categoryId]))
            resultMenuItems.push(<CategoryTitle key={categoryId} categoryId={categoryId}
                                                topCategoryIndex={topIndex}/>)

            const menuItem = items.map(renderMenuItem)

            menuItem.forEach((mi, index) => {
                resultMenuItems.push(
                    <CategoryTitle
                        isHidden
                        key={`${index}_${categoryId}`}
                        categoryId={categoryId}
                        topCategoryIndex={topIndex}
                    />
                )
                resultMenuItems.push(mi)
            })
        })
    })


    useEffect(() => {
        document.addEventListener("scroll", onScrollPage)

        return () => document.removeEventListener("scroll", onScrollPage);
    }, [])

    useEffect(() => {
        if (!!menuItems?.length && selectedTopCategoryId === undefined) {
            setSelectedTopCategoryId(topCategories[0].topCategoryIndex)
        }

        //This is a fix of main bug. Thanks God. After you leave page where we use CategoryMenuRow
        // you didn't clear after yourself and had wrong indexes.
        return () => {
            categoryIdIndexMapper = {};
            indexCalculator = 0;
        }
    }, [menuItems])

    useEffect(() => {
        setTimeout(() => {
            const lastEdited = document.getElementsByClassName(LAST_EDITED_CLASSNAME)[0];
            if (isCurrentPageEqual(URL.EDIT_MENU) && lastEdited) {
                window.scrollTo({top: lastEdited.offsetTop - CATEGORY_ROW_HEIGHT, behavior: "smooth"});
            }
            // Delay should be minimum 1000, because if we take smaller scroll to last edited on edit-menu page won't work.
        }, 1000);
    }, [menuItemCandidateToEdit]);

    return (
        <>
            {!isHideFixedTop && (
                <FixTop className="menu-header">
                    <BgWrapper style={{background: 'white'}}>
                        {/*** TOP CATEGORIES ***/}
                        <HorizontalSwiper
                            slidesPerView={
                                topCategories.length < 3
                                    ? 2
                                    : 4
                            }
                            sliderStylePadding='0 6px 10px'
                            subCategoryIndex={selectedTopCategoryId}
                        >
                            {topCategories.map(details => renderTopCategory(details))}
                        </HorizontalSwiper>
                        {/*** SUB CATEGORIES ***/}
                        <BgWrapper>
                            <SubCategoryWrapper className={CATEGORY_CLASSNAME}>
                                <HorizontalSwiper
                                    sliderStylePadding={'0 6px 14px'}
                                    subCategoryIndex={categoryIdIndexMapper[selectedSubCategoryId]}
                                >
                                    {subCategories}
                                </HorizontalSwiper>
                            </SubCategoryWrapper>
                        </BgWrapper>
                    </BgWrapper>
                </FixTop>
            )
            }
            {/*
                We use RowSplitter here because MenuHeader use fixed position and
                lost his height and we added fake element the same height under it.
                This is only for the first CategoryTitle
             */}
            {!isHideFixedTop && <RowSplitter height={`${CATEGORY_ROW_HEIGHT + 10}px`}/>}
            {/***  MENU ITEM  ***/}
            {resultMenuItems}
        </>
    )
}

export default memo(CategoryMenuView);