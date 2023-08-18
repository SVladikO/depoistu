import React from "react";
import {Wrapper} from './CategoryItem.style'

function CategoryItem({category = {}, clickHandler, isSelected, itemsAmountPerCategory}) {
    return (
        <Wrapper isSelected={isSelected} onClick={clickHandler}>
            {category.title}{itemsAmountPerCategory ? `(${itemsAmountPerCategory})` : ''}
        </Wrapper>
    )
}

export default CategoryItem;