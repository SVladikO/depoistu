import {Wrapper} from "./top-category-title.style";
import {CATEGORY_ID_MAPPER_AS_OBJECT} from 'utils/category';
import {generateTagId, CATEGORY_TITLE_CLASS_NAME} from '../../utils'

/**
 *
 * @param categoryId
 * @param topCategoryIndex
 * @param isHidden - We need hide category title for case when we scroll up page and should change sub and top category.
 * @returns {JSX.Element}
 */
const CategoryTitle = ({categoryId, topCategoryIndex, isHidden = false}) => {
    const categoryTitle = CATEGORY_ID_MAPPER_AS_OBJECT[categoryId].title;

    return (
        <Wrapper
            key={categoryTitle + topCategoryIndex + Math.random()}
            className={CATEGORY_TITLE_CLASS_NAME}
            id={generateTagId(categoryId, topCategoryIndex)}
            isHidden={isHidden}
        >
            {categoryTitle.toUpperCase()}
        </Wrapper>
    )
}

export default CategoryTitle;