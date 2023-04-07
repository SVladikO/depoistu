import React,{useState} from "react";
import {Wrapper, IconWrapper, Title} from './CategoryItem.style'

function CategoryItem({category = {}, clickHandler, selected, itemsAmountPerCategory}) {
    return (
        <Wrapper onClick={clickHandler} selected={selected}>
            {category.icon && <IconWrapper>{<category.icon/>}</IconWrapper>}
            <Title selected={selected}>{category.title}({itemsAmountPerCategory ? `${itemsAmountPerCategory}` : ''})</Title>
        </Wrapper>
    )
}

export default CategoryItem;