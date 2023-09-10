import React, {memo, useEffect, useMemo, useState} from 'react';
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
    getIsScrollDisabled
} from "./utils";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const CATEGORY_ROW_HEIGHT = 96;

const CategoryMenuView = ({
                              menuItems = [],
                              showMenuItemAmount,
                              withEditIcon,
                              editPage = false,
                          }) => {

    useScrollUp();
    const navigate = useNavigate();
    const [menuTree, setMenuTree] = useState([]);
    const [selectedSubTopCategory, setSelectedSubTopCategory] = useState({});
    const onScrollPage = () => {
        if (getIsScrollDisabled()) {
            return;
        }

        const categoryTitleTags = document.getElementsByClassName(CATEGORY_TITLE_CLASS_NAME)
        Object.values(categoryTitleTags).forEach(element => {
                const y = element.offsetTop - window.scrollY - CATEGORY_ROW_HEIGHT;

                if (y < 60 && y > 0) {
                    let [HeyHowAreYou, categoryId, topCategoryId] = element.id.split('_').map(Number);

                    if (categoryId !== selectedSubTopCategory.categoryId) {
                        setSelectedSubTopCategory({categoryId, topCategoryId});
                    }
                }
            }
        )
    }

    const scrollTo = () => {
        disableScrollListener();
        const categoryTitleTag = document.querySelector('#' + generateTagId(selectedSubTopCategory.categoryId, selectedSubTopCategory.topCategoryId));

        //This check for EditMenuPage no menu
        if (!categoryTitleTag) {
            return
        }

        const topOfElement = categoryTitleTag.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: topOfElement, behavior: "smooth"});

        enableScrollListener()
    }

    const onChangeTopCategory = topCategoryId => () => {
        const categoryId = Object.keys(menuTree[topCategoryId].menuItems)[0];
        setSelectedSubTopCategory({categoryId, topCategoryId})
        scrollTo({categoryId, topCategoryId})
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
                        (categoryId, index) => {
                            const oneCategoryMenuItems = topCategory.menuItems[categoryId];
                            const categoryTitle = CATEGORY_ID_MAPPER_AS_OBJECT[+categoryId].title;

                            menuItems.push(
                                <CategoryTitle
                                    key={categoryTitle}
                                    className={CATEGORY_TITLE_CLASS_NAME}
                                    id={generateTagId(categoryId, index, topCategoryIndex)}
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
            <MenuHeader>
                <BgWrapper>
                    {/*** TOP CATEGORIES ***/}
                    <div>
                        <TopCategoryWrapper>
                            {menuTree.map((topCategory, index) => (
                                <TopCategoryItem
                                    key={index}
                                    isSelected={index === selectedSubTopCategory.topCategoryId}
                                    onClick={onChangeTopCategory(index)}
                                >
                                    {translate(topCategory.translationKey).toUpperCase()}
                                </TopCategoryItem>))}
                            {/*If you commit this row and check CategoryMenuRow you understand everything. */}
                            <TopCategoryItem style={{width: '90%'}}/>
                        </TopCategoryWrapper>
                    </div>
                    {/*** SUB CATEGORIES ***/}
                    <SubCategoryWrapper className="category_menu_row_wrapper">
                        <HorizontalSwiper selectedCategory={selectedSubTopCategory}>
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
                                            debugger
                                            return (
                                                <SwiperSlide key={index}>
                                                    <SubCategoryItem
                                                        title={CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title}
                                                        isSelected={selectedSubTopCategory.categoryId === categoryId}
                                                        clickHandler={() => setSelectedSubTopCategory({topCategoryIndex, categoryId})}
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
            <RowSplitter height={'100px'}/>
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