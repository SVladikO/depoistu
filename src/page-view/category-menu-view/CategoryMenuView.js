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

import {CategoryItem, MenuItem, RowSplitter, HorizontalSwiper, PrimaryButton} from "components";

import {URL} from "utils/config";
import {useScrollUp} from "utils/hook";
import {getTopCategories} from 'utils/category';
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
    menuItems.sort((menuItem1, menuItem2) =>
        CATEGORY_ID_MAPPER_AS_OBJECT[menuItem1.categoryId].index - CATEGORY_ID_MAPPER_AS_OBJECT[menuItem2.categoryId].index
    )
}

const CategoryMenuView = ({
                              menuItems = [],
                              showMenuItemAmount,
                              withEditIcon,
                              editPage = false,
                          }) => {


    const navigate = useNavigate();
    const [topCategories, setTopCategories] = useState([]);

    const [id_Index_TopId_uniqueCategories, setId_Index_TopId_uniqueCategories] = useState();
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
        const firstCategoryIdInTopCategories = topCategories[index].ids[0];
        const candidateCategory = id_Index_TopId_uniqueCategories.find(elem => elem.id === firstCategoryIdInTopCategories)
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
        // sortByIndex(menuItems)
        const uniqueCategoryIds = getSortedUniqueCategoryIds(menuItems);
        const availableTopCategories = getTopCategories(uniqueCategoryIds);
        setTopCategories(availableTopCategories)

        const categories = uniqueCategoryIds.map((id, index) => ({
            id,
            index,
            topCategoryId: getTopCategoryId(id, availableTopCategories)
        }))
        debugger;
        setId_Index_TopId_uniqueCategories(categories)

    }, [menuItems]);

    const TopCategories = useMemo(() => (
        <div>
            <TopCategoryWrapper>
                {topCategories.map((tc, index) => (
                    <TopCategoryItem
                        key={tc.key}
                        isSelected={index === selectedCategory.topCategoryId}
                        onClick={onChangeTopCategory(index)}
                    >
                        {translate(tc.translationKey).toUpperCase()}
                    </TopCategoryItem>))}
                {/*If you commit this row and check CategoryMenuRow you understand everything. */}
                <TopCategoryItem style={{width: '90%'}}/>
            </TopCategoryWrapper>
        </div>
    ), [selectedCategory, topCategories])

    const SubCategories = useMemo(() => (
        <SubCategoryWrapper className="category_menu_row_wrapper">
            <HorizontalSwiper selectedCategory={selectedCategory}>
                {
                    id_Index_TopId_uniqueCategories?.map(category => (
                        <SwiperSlide key={category.id}>
                            <CategoryItem
                                category={CATEGORY_MAPPER_AS_ARRAY[category.id]}
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
    ), [id_Index_TopId_uniqueCategories, selectedCategory]);

    const MenuItemComponents = useMemo(() => {
        const ids = [];

        if (!id_Index_TopId_uniqueCategories?.length) {
            return;
        }
        console.log('-----')
        sortByIndex(menuItems)
        return menuItems
            ?.map(menuItem => {
                console.log(menuItem.categoryId);
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
                        id={generateTagId(id_Index_TopId_uniqueCategories.find(elem => elem.id === menuItem.categoryId))}
                        key={CATEGORY_MAPPER_AS_ARRAY[menuItem.categoryId].title}
                    >
                        {CATEGORY_MAPPER_AS_ARRAY[menuItem.categoryId].title.toUpperCase()}
                    </CategoryTitle>,
                    MenuItemComponent
                ];
            })?.flat()
    }, [menuItems, id_Index_TopId_uniqueCategories]);

    // *** render ***
    return (
        <>
            {
                !!menuItems.length && (
                    <MenuHeader>
                        <BgWrapper>
                            {TopCategories}
                            {SubCategories}
                        </BgWrapper>
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