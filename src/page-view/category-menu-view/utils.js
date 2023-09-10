import React from "react";

const CATEGORY_ID_PREFIX = 'category_'

/**
 * Generate element id from categoryId, index(position in menu) and parent topCategoryId.
 * We need these information to handle .scroll method
 * @param id
 * @param index
 * @param topCategoryId
 * @return {`category_id/${string}_index/${string}_topId/${string}`}
 */
export const generateTagId = ({id, index, topCategoryId}) => `${CATEGORY_ID_PREFIX}id/${id}_index/${index}_topId/${topCategoryId}`;

/**
 * Get object which needed to generate Category Title id for tag.
 */
export const findObjectByCategoryId = (categoryId, id_Index_TopId_uniqueCategories) => id_Index_TopId_uniqueCategories.find(elem => elem.id === categoryId);

export const MenuHeader = ({children}) => (
    <div className="wrapper_1" style={{position: 'sticky', top: -1, zIndex: 10}} className="category-row-wrapper">
        <div className="wrapper_2" style={{position: 'relative', top: 0, zIndex: 10, left: 0, right: 0}}>
            <div className="wrapper_3" style={{position: 'absolute', top: 0, zIndex: 10, left: 0, right: 0}}>
                {children}
            </div>
        </div>
    </div>
);

export function enableScrollListener() {
    setTimeout(() => {
        const domElement = document.getElementsByClassName("category-menu-row-wrapper")[0]
        domElement.classList.remove('stop-scroll')
    }, 2500);
}

export function disableScrollListener() {
    if (getIsScrollDisabled()) {
        return;
    }

    //The only possible way to stop scroll listener when you triggerred scrollTo is adding class
    const domElement = document.getElementsByClassName("category_menu_row_wrapper")[0]
    domElement.classList.add('stop-scroll');
}

export function getIsScrollDisabled() {
    const stopScroll = document.getElementsByClassName("stop-scroll");

    return !!stopScroll?.length
}

