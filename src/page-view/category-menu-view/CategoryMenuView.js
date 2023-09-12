import React, {memo, useEffect, useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import {Link, useNavigate} from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryWrapper,
    TopCategoryItem,
    BgWrapper,
    SubCategoryWrapper,
    CategoryTitle
} from "./CategoryMenuView.style";

import {SubCategoryItem, MenuItem, RowSplitter, HorizontalSwiper, PrimaryButton} from "components";

import {URL} from "utils/config";
import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION as TR, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {
    CATEGORY_ID_MAPPER_AS_OBJECT,
    TOP_CATEGORIES
} from 'utils/category';
import {
    enableScrollListener,
    MenuHeader,
    generateTagId,
    disableScrollListener,
    getIsScrollDisabled, CATEGORY_CLASSNAME
} from "./utils";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const CATEGORY_ROW_HEIGHT = 116;

let indexCalculator = 0;
let categoryIdIndexMapper = {};




const CategoryMenuView = ({
                              menuItems = [],
                              withEditIcon,
                              editPage = false,
                          }) => {

    useScrollUp();
    const navigate = useNavigate();
    const [selectedTopCategoryId, setSelectedTopCategoryId] = useState();
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState();

    const onScrollPage = () => {
        if (getIsScrollDisabled()) {
            console.log('scroll disabled')
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

    const renderTopCategory = (topCategoryKey, topCategoryIndex, categoryId) => (
        <TopCategoryItem
            key={topCategoryIndex}
            isSelected={topCategoryIndex === selectedTopCategoryId}
            onClick={onChangeTopCategory(topCategoryIndex, categoryId)}
        >
            {translate(TR.TOP_CATEGORIES[topCategoryKey]).toUpperCase()}
        </TopCategoryItem>
    )

    const renderSubCategory = (categoryId, topCategoryIndex, subCategoryIndex) => {
        debugger
        return (
            <SwiperSlide key={subCategoryIndex}>
                <SubCategoryItem
                    title={categoryId + ' ' + CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title}
                    isSelected={+selectedSubCategoryId === +categoryId}
                    clickHandler={() => {
                        setSelectedSubCategoryId(categoryId)
                        setSelectedTopCategoryId(topCategoryIndex)
                        scrollTo(categoryId, topCategoryIndex)
                    }}
                />
            </SwiperSlide>
        )
    };

    const renderCategoryTitle = (categoryId, topCategoryIndex) => {
        const categoryTitle = CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title;

        return (
            <CategoryTitle
                key={categoryTitle}
                className={CATEGORY_TITLE_CLASS_NAME}
                id={generateTagId(categoryId, topCategoryIndex)}
            >
                {categoryId} {categoryTitle.toUpperCase()}
            </CategoryTitle>
        )
    }

    const renderMenuItem = (mi, index) =>
        <MenuItem
            key={`menu_item${index}${mi.id}`}
            item={mi}
            withEditIcon={withEditIcon}
            onEditClick={navigateToEditMenuItemPage(mi)}
        />

    const topCategories = []; // Contain array of top category components
    const subCategories = []; // Contain array of sub category components
    const resultMenuItems = []; // Contain array of category title, menu items

    // TOP_CATEGORIES contain uniq array of sub categories per category
    Object.keys(TOP_CATEGORIES).forEach((topCategoryKey, topCategoryIndex) => {
        TOP_CATEGORIES[topCategoryKey].forEach(categoryId => {
            const items = menuItems.filter(menuItem => menuItem.categoryId === categoryId)

            // No items nothing to do
            if (!items.length) {
                return
            }

            // TOP CATEGORY
            // Add top category if it wasn't added before
            if (!topCategories[topCategoryIndex]) {
                topCategories.push(renderTopCategory(topCategoryKey, topCategoryIndex, categoryId))
            }

            // We need categoryIdIndexMapper to handle sub category scroll when you scroll vertically
            if (categoryIdIndexMapper[categoryId] === undefined) {
                categoryIdIndexMapper[categoryId] = indexCalculator++;
            }

            subCategories.push(renderSubCategory(categoryId, topCategoryIndex, categoryIdIndexMapper[categoryId]))
            resultMenuItems.push(renderCategoryTitle(categoryId, topCategoryIndex))
            resultMenuItems.push(items.map(renderMenuItem))

        })
    })


    return (
        <>
            <MenuHeader className="menu-header">
                <BgWrapper>
                    {/*** TOP CATEGORIES ***/}
                    <div>
                        <TopCategoryWrapper>
                            {topCategories}
                            {/*If you commit this row and check CategoryMenuRow you understand everything. */}
                            <TopCategoryItem style={{width: '90%'}}/>
                        </TopCategoryWrapper>
                    </div>
                    {/*** SUB CATEGORIES ***/}
                    <SubCategoryWrapper className={CATEGORY_CLASSNAME}>
                        <HorizontalSwiper subCategoryIndex={categoryIdIndexMapper[selectedSubCategoryId]}>
                            {subCategories}
                        </HorizontalSwiper>
                    </SubCategoryWrapper>
                </BgWrapper>
            </MenuHeader>
            {/*
                We use RowSplitter here because MenuHeader use fixed position and
                lost his height and we added fake element the same height under it.
                This is only for the first CategoryTitle
             */}
            <RowSplitter height={`${CATEGORY_ROW_HEIGHT + 10}px`}/>
            {/***  MENU ITEM  ***/}
            {resultMenuItems}
            {
                editPage &&
                <>
                    <RowSplitter height={'15px'}/>
                    <Link to={`${URL.ADD_MENU_ITEM}`}>
                        <PrimaryButton isWide>
                            {translate(TRANSLATION.PAGE.EDIT_MENU.BUTTON.ADD_MENU_ITEM)}
                        </PrimaryButton>
                    </Link>
                </>
            }
        </>
    )
}

export default memo(CategoryMenuView);