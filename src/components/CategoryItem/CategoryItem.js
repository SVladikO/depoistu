import React,{useState} from "react";
import {Wrapper, IconWrapper, Title} from './CategoryItem.style'

function CategoryItem({category = {}, clickHandler}) {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <Wrapper onClick={toggleClass} active={isActive}>
            {category.icon && <IconWrapper>{<category.icon/>}</IconWrapper>}
            <Title active={isActive}>{category.title}</Title>
        </Wrapper>
    )
}

export default CategoryItem;