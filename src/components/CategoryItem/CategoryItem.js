import {Wrapper, IconWrapper, Title} from './CategoryItem.style'

function CategoryItem({category = {}}) {
    return (
        <Wrapper>
            {category.icon && <IconWrapper>{<category.icon/>}</IconWrapper>}
            <Title>{category.title}</Title>
        </Wrapper>
    )
}

export default CategoryItem;