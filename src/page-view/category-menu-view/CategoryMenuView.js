import React, {memo, useEffect, useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import {useNavigate} from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryItem,
    BgWrapper,
    SubCategoryWrapper,
    CategoryTitle
} from "./CategoryMenuView.style";

import {SubCategoryItem, MenuItem, RowSplitter, HorizontalSwiper} from "components";

import {URL} from "utils/config";
import {useLocalStorage, useScrollUp} from "utils/hook";
import {translate, TRANSLATION as TR} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {
    CATEGORY_ID_MAPPER_AS_OBJECT,
    TOP_CATEGORIES
} from 'utils/category';
import {
    enableScrollListener,
    FixTop,
    generateTagId,
    disableScrollListener,
    getIsScrollDisabled, CATEGORY_CLASSNAME
} from "./utils";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const LAST_EDITED_CLASSNAME = 'last-edited-menu-item';

export const CATEGORY_ROW_HEIGHT = 112;

let indexCalculator = 0;
let categoryIdIndexMapper = {};

const CategoryMenuView = (props) => {
    const {menuItems, isEditMode} = props
    useScrollUp();
    const navigate = useNavigate();
    //duplication
    const isSelected = url => window.location.pathname === url;
    const [selectedTopCategoryId, setSelectedTopCategoryId] = useState();
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState();
    const [selectedMenuItemId, setSelectedMenuItemId] = useState();
    const [menuItemCandidateToEdit] = useLocalStorage(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, {})

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

    const renderTopCategory = ({topCategoryKey, topCategoryIndex, categoryId}) => (
        <SwiperSlide key={topCategoryIndex}>
            <TopCategoryItem
                className="TopCategoryItem"
                key={topCategoryIndex}
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

    /**
     *
     * @param categoryId
     * @param topCategoryIndex
     * @param isHidden - We need hide category title for case when we scroll up page and should change sub and top category.
     * @returns {JSX.Element}
     */
    const renderCategoryTitle = (categoryId, topCategoryIndex, isHidden = false) => {
        const categoryTitle = CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title;

        return (
            <CategoryTitle
                key={categoryTitle + topCategoryIndex + Math.random()}
                className={CATEGORY_TITLE_CLASS_NAME}
                id={generateTagId(categoryId, topCategoryIndex)}
                isHidden={isHidden}
            >
                {categoryTitle.toUpperCase()}
            </CategoryTitle>
        )
    }
    const renderMenuItem = (mi, index) => (
        <div className={mi.id === menuItemCandidateToEdit.id ? LAST_EDITED_CLASSNAME : ''}>
            <MenuItem
                key={`menu_item${index}${mi.id}`}
                item={mi}
                isEditMode={isEditMode}
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
    Object.keys(TOP_CATEGORIES).forEach((topCategoryKey, topCategoryIndex) => {
        let wasTopSet = false;

        TOP_CATEGORIES[topCategoryKey].forEach(categoryId => {
            const items = menuItems.filter(menuItem => menuItem.categoryId === categoryId)

            // No items nothing to do
            if (!items.length) {
                return
            }

            if (!wasTopSet) {
                wasTopSet = true;
                topCategories.push({topCategoryKey, topCategoryIndex, categoryId});
            }

            // We need categoryIdIndexMapper to handle sub category scroll when you scroll vertically
            if (categoryIdIndexMapper[categoryId] === undefined) {
                categoryIdIndexMapper[categoryId] = indexCalculator++;
            }

            subCategories.push(renderSubCategory(categoryId, topCategoryIndex, categoryIdIndexMapper[categoryId]))
            resultMenuItems.push(renderCategoryTitle(categoryId, topCategoryIndex))

            const menuItem = items.map(renderMenuItem)

            menuItem.forEach(mi => {
                resultMenuItems.push(renderCategoryTitle(categoryId, topCategoryIndex, true))
                resultMenuItems.push(mi)
            })
        })
    })

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
    })

    useEffect(() => {
        const lastEdited = document.getElementsByClassName(LAST_EDITED_CLASSNAME)[0];
        if (isSelected(URL.EDIT_MENU) && lastEdited) {
            window.scroll({top: lastEdited.offsetTop - CATEGORY_ROW_HEIGHT, behavior: "smooth"});
        }
    }, []);

    return (
        <>
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
            {/*
                We use RowSplitter here because MenuHeader use fixed position and
                lost his height and we added fake element the same height under it.
                This is only for the first CategoryTitle
             */}
            <RowSplitter height={`${CATEGORY_ROW_HEIGHT + 10}px`}/>
            {/***  MENU ITEM  ***/}
            {resultMenuItems}
        </>
    )
}

export default memo(CategoryMenuView);