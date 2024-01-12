import {useState} from "react";

import {Description, SeeMore } from "./menu-item-description.style";

import {translate, TRANSLATION} from "utils/translation";

const MenuItemDescription = ({item}) => {
    const [isShowItemDescription, setIsShowItemDescription] = useState(false)

    const showItemDescription = () => setIsShowItemDescription(true)

    if (!item.description) {
        return;
    }

    const shortDescription = item.description?.split('')?.slice(0, 55)?.join('')

    return (
        <Description>
            {item.description.length > 75 && !isShowItemDescription
                ? <>
                    {shortDescription}...
                    <SeeMore onClick={showItemDescription}> {translate(TRANSLATION.SEE_MORE)}</SeeMore>
                </>
                : item.description
            }
        </Description>
    )
}

export default MenuItemDescription;