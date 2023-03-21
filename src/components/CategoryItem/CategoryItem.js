import {Wrapper, IconWrapper, Title} from './CategoryItem.style'

function CategoryItem({category = {}, clickHandler}) {
    return (
        <Wrapper onClick={clickHandler}>
            {category.icon && <IconWrapper>{<category.icon/>}</IconWrapper>}
            <Title>{category.title}</Title>
        </Wrapper>
    )
}

export default CategoryItem;