import {Wrapper, LoadingWrapper} from "./food-image.style";

import {ReactComponent as LoadingIcon} from "assets/icons/spinner.svg";

import ImageUrlFormatter from "utils/image.utils";
import {useState} from "react";

const FoodImage = ({item}) => {
    const [isShowLoader, setIsShowLoader] = useState(true)

    if (!item.isImageVisible) {
        return;
    }

    return (
        <Wrapper>
            <img onLoad={() => setIsShowLoader(false)} src={ImageUrlFormatter.formatForMenuItemBig(item.imageUrl)} alt="food image"/>
            {isShowLoader && <LoadingWrapper className='animated_svg'>
                <LoadingIcon/>
            </LoadingWrapper>
            }
        </Wrapper>
    )
}

export default FoodImage;