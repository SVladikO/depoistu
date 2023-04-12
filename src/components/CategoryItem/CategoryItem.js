import React,{useState} from "react";
import {Wrapper, IconWrapper, Title} from './CategoryItem.style'

function CategoryItem({category = {}, clickHandler, isSelected, itemsAmountPerCategory}) {
    return (
        <Wrapper onClick={clickHandler} isSelected={isSelected}>
            {category.icon && <IconWrapper>{<category.icon/>}</IconWrapper>}
            <Title isSelected={isSelected}>{category.title}{itemsAmountPerCategory ? `(${itemsAmountPerCategory})` : ''}</Title>
        </Wrapper>
    )
}

export default CategoryItem;