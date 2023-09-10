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
    CATEGORY_MAPPER_AS_ARRAY,
    CATEGORY_ID_MAPPER_AS_OBJECT,
    getTopCategoryId,
    getSortedUniqueCategoryIds
} from 'utils/category';
import {
    enableScrollListener,
    MenuHeader,
    generateTagId,
    disableScrollListener,
    getIsScrollDisabled
} from "./utils";
import menuItem from "../../components/MenuItem/MenuItem";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const CATEGORY_ROW_HEIGHT = 96;


const sortByIndex = (menuItems = []) => {

}

const CategoryMenuView = ({
                              menuItems = [],
                              showMenuItemAmount,
                              withEditIcon,
                              editPage = false,
                          }) => {


    useScrollUp();
    const navigate = useNavigate();
    const [menuTree, setMenuTree] = useState([]);
    const [tree, setTree] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});


    const onScrollPage = () => {
        if (getIsScrollDisabled()) {
            return;
        }

        const categoryTitleTags = document.getElementsByClassName(CATEGORY_TITLE_CLASS_NAME)
        Object.values(categoryTitleTags).forEach(element => {
                const y = element.offsetTop - window.scrollY - CATEGORY_ROW_HEIGHT;

                if (y < 60 && y > 0) {
                    let [idName, candidateCategoryId, candidateCategoryIndex, candidateTopCategoryId] = element.id.split('_').map(Number);

                    if (candidateCategoryId !== selectedCategory.id) {
                        setSelectedCategory({
                            id: candidateCategoryId,
                            index: candidateCategoryIndex,
                            topCategoryId: candidateTopCategoryId
                        });
                    }
                }
            }
        )
    }

    const scrollTo = category => {
        disableScrollListener();
        const categoryTitleTag = document.querySelector('#' + generateTagId(category));

        //This check for EditMenuPage no menu
        if (!categoryTitleTag) {
            return
        }

        const topOfElement = categoryTitleTag.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: topOfElement, behavior: "smooth"});

        enableScrollListener()
    }

    const onChangeCategory = category => {
        setSelectedCategory(category);
    };

    const onChangeCategoryWithScroll = category => {
        onChangeCategory(category)
        scrollTo(category);
    };

    const onChangeTopCategory = index => () => {
        const firstCategoryIdInTopCategories = menuTree[index].ids[0];
        // const candidateCategory = idIndexTopIdObjects.find(elem => elem.id === firstCategoryIdInTopCategories)
        // setSelectedCategory(candidateCategory);
        // scrollTo(candidateCategory);
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
        sortByIndex(menuItems)
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
                                    key={topCategory.key}
                                    isSelected={index === selectedCategory.topCategoryId}
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
                        <HorizontalSwiper selectedCategory={selectedCategory}>
                            {
                                menuTree?.map(topCategory => (
                                    Object.keys(topCategory.menuItems).map(categoryId => {
                                            const menuItem = topCategory.menuItems[categoryId];

                                            return (
                                                <SwiperSlide key={menuItem.id}>
                                                    <SubCategoryItem
                                                        title={CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title}
                                                        isSelected={selectedCategory.id === menuItem.id}
                                                        clickHandler={() => onChangeCategoryWithScroll(menuItem)}
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
            {/*{*/}
            {/*    menuTree.map(*/}
            {/*        topCategory =>*/}
            {/*            topCategory.menuItems*/}
            {/*                ?.map(menuItem => {*/}
            {/*                    const MenuItemComponent = <MenuItem*/}
            {/*                        key={menuItem.id}*/}
            {/*                        item={menuItem}*/}
            {/*                        withEditIcon={withEditIcon}*/}
            {/*                        onEditClick={navigateToEditMenuItemPage(menuItem)}*/}
            {/*                    />*/}

            {/*                    return [*/}
            {/*                        <CategoryTitle*/}
            {/*                            className={CATEGORY_TITLE_CLASS_NAME}*/}
            {/*                            key={CATEGORY_MAPPER_AS_ARRAY[menuItem.categoryId].title}*/}
            {/*                        >*/}
            {/*                            {CATEGORY_MAPPER_AS_ARRAY[menuItem.categoryId].title.toUpperCase()}*/}
            {/*                        </CategoryTitle>,*/}
            {/*                        MenuItemComponent*/}
            {/*                    ];*/}
            {/*                })*/}
            {/*    )*/}
            {/*}*/}
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