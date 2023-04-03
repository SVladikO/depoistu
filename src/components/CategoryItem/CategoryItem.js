import React,{useState} from "react";
import {Wrapper, IconWrapper, Title} from './CategoryItem.style'

function CategoryItem({category = {}, clickHandler, selected, count}) {
    return (
        <Wrapper onClick={clickHandler} active={selected}>
            {category.icon && <IconWrapper>{<category.icon/>}</IconWrapper>}
            <Title active={selected}>{category.title}({count})</Title>
        </Wrapper>
    )
}

export default CategoryItem;