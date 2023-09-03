import React, {memo, useEffect, useMemo, useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import {Link, useNavigate} from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import {
    TopCategoryWrapper,
    TopCategoryItem,
    BottomLine,
    SubCategoryWrapper
} from "./CategoryMenuView.style";

import {CategoryItem, MenuItem, FetchButton, RowSplitter, HorizontalSwiper} from "../../components";
import {CategoryTitle} from "../../page/search-details/SearchDetails.style";

import {URL} from "../../utils/config";
import {useScrollUp} from "../../utils/hook";
import {getTopCategories} from '../../utils/category';
import {translate, TRANSLATION} from "../../utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";
import {CATEGORY_MAPPER, getTopCategoryId, getCategoryUniqueIds} from '../../utils/category';
import {
    enableScrollListener,
    MenuHeader,
    generateTagId,
    getCategoryIndex,
    disableScrollListener,
    getIsScrollDisabled
} from "./utils";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';
const CATEGORY_ROW_HEIGHT = 100;


const CategoryMenuView = ({
                              menuItems = [],
                              showMenuItemAmount,
                              withEditIcon,
                              editPage = false,
                          }) => {
    const navigate = useNavigate();
    const [topCategories, setTopCategories] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState({});

    useScrollUp()

    const onScrollPage = () => {
        if (getIsScrollDisabled()) {
            return;
        }

        const categoryTitleTags = document.getElementsByClassName(CATEGORY_TITLE_CLASS_NAME)
        Object.values(categoryTitleTags).forEach(element => {
                const y = element.offsetTop - window.scrollY - CATEGORY_ROW_HEIGHT;

                if (y < 60 && y > 0) {
                    const [idName, candidateCategoryId, candidateCategoryIndex, candidateTopCategoryId] = element.id.split('_').map(Number)

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
        const firstCategoryIdInTop = topCategories[index].ids[0];
        const candidateCategory = uniqueCategories.find(category => category.id === firstCategoryIdInTop)
        setSelectedCategory(candidateCategory);
        scrollTo(candidateCategory);
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
        if (!menuItems) {
            return
        }

        const uniqueCategoryIds = getCategoryUniqueIds(menuItems);
        const availableTopCategories = getTopCategories(uniqueCategoryIds);
        setTopCategories(availableTopCategories)

        const categories = uniqueCategoryIds.map((id, index) => ({
            id,
            index,
            topCategoryId: getTopCategoryId(id, availableTopCategories)
        }))
        setUniqueCategories(categories)

    }, [menuItems]);

    const TopCategories = useMemo(() => (<div>
        <BottomLine/>
        <TopCategoryWrapper>
            {topCategories.map((tc, index) => (
                <TopCategoryItem
                    key={tc.key}
                    isSelected={index === selectedCategory.topCategoryId}
                    onClick={onChangeTopCategory(index)}
                >
                    {translate(tc.translationKey)}
                </TopCategoryItem>))}
        </TopCategoryWrapper>
    </div>), [selectedCategory, topCategories])

    const SubCategories = useMemo(() => (
        <SubCategoryWrapper className="category_menu_row_wrapper">
            <HorizontalSwiper selectedCategory={selectedCategory}>
                {
                    uniqueCategories?.map(category => (
                        <SwiperSlide key={category.id}>
                            <CategoryItem
                                category={CATEGORY_MAPPER[category.id]}
                                isSelected={selectedCategory.id === category.id}
                                clickHandler={() => onChangeCategoryWithScroll(category)}
                                itemsAmountPerCategory={
                                    showMenuItemAmount
                                        ? menuItems.filter(mi => mi.categoryId === category.id).length
                                        : 0
                                }
                            />
                        </SwiperSlide>
                    ))
                }
            </HorizontalSwiper>
        </SubCategoryWrapper>
    ), [uniqueCategories, selectedCategory]);

    const MenuItemComponents = useMemo(() => {
        const ids = [];

        if (!uniqueCategories?.length) {
            return;
        }

        return menuItems
            ?.sort((a, b) => a.CATEGORY_ID - b.CATEGORY_ID)
            ?.map(menuItem => {

                const MenuItemComponent = <MenuItem
                    key={menuItem.id}
                    item={menuItem}
                    withEditIcon={withEditIcon}
                    onEditClick={navigateToEditMenuItemPage(menuItem)}
                />

                if (ids.includes(menuItem.categoryId)) {
                    return MenuItemComponent;
                }

                ids.push(menuItem.categoryId);

                return [
                    <CategoryTitle
                        className={CATEGORY_TITLE_CLASS_NAME}
                        id={generateTagId(getCategoryIndex(menuItem.categoryId, uniqueCategories))}
                        key={CATEGORY_MAPPER[menuItem.categoryId].title}
                    >
                        {CATEGORY_MAPPER[menuItem.categoryId].title.toUpperCase()}
                    </CategoryTitle>,
                    MenuItemComponent
                ];
            })?.flat()
    }, [menuItems, uniqueCategories]);

    // *** render ***
    return (
        <>
            {
                !!menuItems.length && (
                    <MenuHeader>
                        {TopCategories}
                        {SubCategories}
                    </MenuHeader>
                )
            }
            <RowSplitter height={'100px'}/>
            {MenuItemComponents}
            {
                editPage &&
                <>
                    <RowSplitter height={'15px'}/>
                    <Link to={`${URL.ADD_MENU_ITEM}`}>
                        <FetchButton
                            isWide>{translate(TRANSLATION.PAGE.EDIT_MENU.BUTTON.ADD_MENU_ITEM)}</FetchButton>
                    </Link>
                </>
            }
        </>
    )
}

export default memo(CategoryMenuView);