import React, {memo, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {
    SubCategoryTitle,
    MenuItemGroupWrapper,
    TopCategory
} from "./CategoryMenuView.style2";

import {MenuItem} from "components";

import {URL} from "utils/config";
import {useScrollUp} from "utils/hook";
import {LOCAL_STORAGE_KEY, LocalStorage} from "utils/localStorage";
import {
    CATEGORY_ID_MAPPER_AS_OBJECT,
    TOP_CATEGORIES
} from 'utils/category';

import {
    generateTagId,
} from "./utils";

const CATEGORY_TITLE_CLASS_NAME = 'CATEGORY_TITLE_CLASS_NAME';

let indexCalculator = 0;
let categoryIdIndexMapper = {};

const CategoryMenuView2 = (props) => {
    const {menuItems, isEditMode} = props
    useScrollUp();
    const navigate = useNavigate();
    const [selectedMenuItemId, setSelectedMenuItemId] = useState();
    const [openSubCategoryId, setOpenSubCategoryId] = useState();

    const navigateToEditMenuItemPage = menuItem => () => {
        LocalStorage.set(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT, menuItem);
        return navigate(URL.EDIT_MENU_ITEM)
    }

    /**
     *
     * @param subCategoryId
     * @param topCategoryIndex
     * @param isHidden - We need hide category title for case when we scroll up page and should change sub and top category.
     * @returns {JSX.Element}
     */
    const renderSubCategoryTitle = (subCategoryId, topCategoryIndex, isHidden = false) => {
        const categoryTitle = CATEGORY_ID_MAPPER_AS_OBJECT[subCategoryId].title;

        return (
            <SubCategoryTitle
                key={categoryTitle + topCategoryIndex + Math.random()}
                id={generateTagId(subCategoryId, topCategoryIndex)}
                isHidden={isHidden}
                onClick={() => {
                    if (subCategoryId === openSubCategoryId) {
                        return setOpenSubCategoryId(null)
                    }

                    setOpenSubCategoryId(subCategoryId)
                }}
            >
                {categoryTitle.toUpperCase()}
            </SubCategoryTitle>
        )
    }

    const renderMenuItem = (mi, index) =>
        <MenuItem
            key={`menu_item${index}${mi.id}`}
            item={mi}
            isEditMode={isEditMode}
            onEditClick={navigateToEditMenuItemPage(mi)}

            isSelected={mi.id === selectedMenuItemId}
            onSelectMenuItem={() => {
                setSelectedMenuItemId(mi.id)
            }}
        />

    const resultMenuItems = []; // Contain array of category title, menu items

    // TOP_CATEGORIES contain uniq array of sub categories per category
    Object.keys(TOP_CATEGORIES).forEach((topCategoryKey, topCategoryIndex) => {
        let wasTopSet = false;


        TOP_CATEGORIES[topCategoryKey].forEach(subCategoryId => {
            const items = menuItems.filter(menuItem => menuItem.categoryId === subCategoryId)

            // No items nothing to do
            if (!items.length) {
                return
            }
            if (!wasTopSet) {

                wasTopSet = true;
                resultMenuItems.push(<TopCategory>{topCategoryKey}</TopCategory>)
            }

            // We need categoryIdIndexMapper to handle sub category scroll when you scroll vertically
            if (categoryIdIndexMapper[subCategoryId] === undefined) {
                categoryIdIndexMapper[subCategoryId] = indexCalculator++;
            }

            resultMenuItems.push(renderSubCategoryTitle(subCategoryId, topCategoryIndex))
            resultMenuItems.push(
                <MenuItemGroupWrapper
                    className='menu-item-group-wrapper'
                    isOpen={+subCategoryId === +openSubCategoryId}
                >
                    {items.map(renderMenuItem)}
                </MenuItemGroupWrapper>
            )

        })
    })

    return (
        <>
            {/***  MENU ITEM  ***/}
            {resultMenuItems}
        </>
    )
}

export default memo(CategoryMenuView2);