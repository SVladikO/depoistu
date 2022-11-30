import {Wrapper, IconWrapper, Title} from './CategoryItem.style'

function CategoryItem({title, children}) {
    return (
        <Wrapper>
            <IconWrapper>{children}</IconWrapper>
            <Title>{title}</Title>
        </Wrapper>
    )
}

export default CategoryItem;