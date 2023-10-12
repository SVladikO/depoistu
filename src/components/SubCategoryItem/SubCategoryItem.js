import React from "react";
import {Wrapper} from './CategoryItem.style'

function SubCategoryItem({title = {}, clickHandler, isSelected, itemsAmountPerCategory}) {
    return (
        <Wrapper isSelected={isSelected} onClick={clickHandler} className="sub_category_item">
            {title}{itemsAmountPerCategory ? `(${itemsAmountPerCategory})` : ''}
        </Wrapper>
    )
}

export default SubCategoryItem;