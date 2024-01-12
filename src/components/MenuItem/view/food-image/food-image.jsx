import {Wrapper} from "./food-image.style";

import ImageUrlFormatter from "utils/image.utils";

const FoodImage = ({item}) => {
    if (!item.isImageVisible) {
        return;
    }

    return (
        <Wrapper>
            <img src={ImageUrlFormatter.formatForMenuItemBig(item.imageUrl)}/>
        </Wrapper>
    )
}

export default FoodImage;