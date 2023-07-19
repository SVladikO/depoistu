import React from "react";
import {Wrapper} from './CategoryItem.style'

function CategoryItem({category = {}, clickHandler, isSelected, itemsAmountPerCategory}) {
    return (
        <Wrapper onClick={clickHandler}  isSelected={isSelected}>
            {category.title}{itemsAmountPerCategory ? `(${itemsAmountPerCategory})` : ''}
        </Wrapper>
    )
}

export default CategoryItem;