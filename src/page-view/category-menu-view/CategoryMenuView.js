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
import {getMenuTree} from 'utils/category';
import {translate, TRANSLATION} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {
    CATEGORY_ID_MAPPER_AS_OBJECT,
    getSortedUniqueCategoryIds
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
                              showMenuItemAmount,
                              withEditIcon,
                              editPage = false,
                          }) => {

    useScrollUp();
    const navigate = useNavigate();
    const [menuTree, setMenuTree] = useState([]);
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
                        console.log(222, categoryId, topCategoryId, 'selectedSubCategoryId: ', selectedSubCategoryId)
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

    const onChangeTopCategory = topCategoryId => () => {
        const categoryId = +Object.keys(menuTree[topCategoryId].menuItems)[0];
        setSelectedSubCategoryId(categoryId)
        setSelectedTopCategoryId(topCategoryId);
        scrollTo(categoryId, topCategoryId)
    }

    const navigateToEditMenuItemPage = menuItem => () => {
        LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, menuItem);
        return navigate(URL.EDIT_MENU_ITEM)
    }

    const renderMenuItems = () => {
        const menuItems = []
        menuTree.length && menuTree.map(
            (topCategory, topCategoryIndex) => {
                return Object.keys(topCategory.menuItems)
                    ?.map(
                        (categoryId) => {
                            const oneCategoryMenuItems = topCategory.menuItems[categoryId];
                            const categoryTitle = CATEGORY_ID_MAPPER_AS_OBJECT[+categoryId].title;

                            menuItems.push(
                                <CategoryTitle
                                    key={categoryTitle}
                                    className={CATEGORY_TITLE_CLASS_NAME}
                                    id={generateTagId(categoryId, topCategoryIndex)}
                                >
                                    {categoryTitle.toUpperCase()}
                                </CategoryTitle>
                            );

                            menuItems.push(oneCategoryMenuItems.map(
                                    (mi, index) =>
                                        <MenuItem
                                            key={`menu_item${index}${mi.id}`}
                                            item={mi}
                                            withEditIcon={withEditIcon}
                                            onEditClick={navigateToEditMenuItemPage(mi)}
                                        />
                                )
                            );
                        }
                    )
            })
        return menuItems.flat();
    }

    useEffect(() => {
        document.addEventListener("scroll", onScrollPage)

        return () => {
            document.removeEventListener("scroll", onScrollPage);
        }
    }, [])


    useEffect(() => {
        const uniqueCategoryIds = getSortedUniqueCategoryIds(menuItems);
        setMenuTree(getMenuTree(uniqueCategoryIds, menuItems));
    }, menuItems)

    return (
        <>
            <MenuHeader className="menu-header">
                <BgWrapper>
                    {/*** TOP CATEGORIES ***/}
                    <div>
                        <TopCategoryWrapper>
                            {menuTree.map((topCategory, topCategoryIndex) => (
                                <TopCategoryItem
                                    key={topCategoryIndex}
                                    isSelected={topCategoryIndex === selectedTopCategoryId}
                                    onClick={onChangeTopCategory(topCategoryIndex)}
                                >
                                    {translate(topCategory.translationKey).toUpperCase()}
                                </TopCategoryItem>))}
                            {/*If you commit this row and check CategoryMenuRow you understand everything. */}
                            <TopCategoryItem style={{width: '90%'}}/>
                        </TopCategoryWrapper>
                    </div>
                    {/*** SUB CATEGORIES ***/}
                    <SubCategoryWrapper className={CATEGORY_CLASSNAME}>
                        <HorizontalSwiper subCategoryIndex={categoryIdIndexMapper[selectedSubCategoryId]}>
                            {
                                // EXAMPLE OF menuTree data structure
                                // [
                                //   {
                                //     translationKey: 'TRANSLATION_KEY',
                                //     menuItems: {
                                //                  1: [{id, categoryId, title,}, ...],  where key 1 is categoryKey
                                //                  2: [{id, categoryId, title,}, ...],
                                //                  ...
                                //    }
                                // ]

                                menuTree?.map((topCategory, topCategoryIndex) => (
                                    Object.keys(topCategory.menuItems).map((categoryId, index) => {
                                            const menuItem = topCategory.menuItems[categoryId];
                                            if (categoryIdIndexMapper[categoryId] === undefined) {
                                                categoryIdIndexMapper[categoryId] = indexCalculator++;
                                            }

                                            console.log(1111, selectedSubCategoryId, +categoryId, selectedSubCategoryId === +categoryId)

                                            return (
                                                <SwiperSlide key={index}>
                                                    <SubCategoryItem
                                                        title={CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title}
                                                        isSelected={+selectedSubCategoryId === +categoryId}
                                                        clickHandler={() => {
                                                            setSelectedSubCategoryId(categoryId)
                                                            setSelectedTopCategoryId(topCategoryIndex)
                                                            scrollTo(categoryId, topCategoryIndex)
                                                        }}
                                                        itemsAmountPerCategory={
                                                            showMenuItemAmount
                                                                ? menuItems.filter(mi => mi.categoryId === menuItem.id).length
                                                                : 0
                                                        }
                                                    />
                                                </SwiperSlide>
                                            )
                                        }
                                    )))
                            }
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
            {renderMenuItems()}
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