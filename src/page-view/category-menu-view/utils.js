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
export const generateTagId = (id, topCategoryId) => `${CATEGORY_ID_PREFIX}${id}_${topCategoryId}`;

export const MenuHeader = ({children}) => (
    <div className="wrapper_1" style={{position: 'sticky', top: -1, zIndex: 10}} className="category-row-wrapper">
        <div className="wrapper_2" style={{position: 'relative', top: 0, zIndex: 10, left: 0, right: 0}}>
            <div className="wrapper_3" style={{position: 'absolute', top: 0, zIndex: 10, left: 0, right: 0}}>
                {children}
            </div>
        </div>
    </div>
);

export const CATEGORY_CLASSNAME = 'category_menu_row_wrapper'

let myTimeout;

export function enableScrollListener() {
    // When we click few times on topCategories or subCategories we need to stop previous enable scroll
    if (myTimeout) {
        clearTimeout(myTimeout);
    }

    myTimeout = setTimeout(() => {
        const domElement = document.getElementsByClassName(CATEGORY_CLASSNAME)[0]
        domElement.classList.remove('disable_verticall_scroll_listener')
    }, 2500);
}

export function disableScrollListener() {
    if (getIsScrollDisabled()) {
        return;
    }

    //The only possible way to stop scroll listener when you triggerred scrollTo is adding class
    const domElement = document.getElementsByClassName(CATEGORY_CLASSNAME)[0]
    domElement.classList.add('disable_verticall_scroll_listener');
}

export const getIsScrollDisabled = () => !!document.getElementsByClassName("disable_verticall_scroll_listener").length;

