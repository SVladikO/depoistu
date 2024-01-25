import {useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Wrapper, LoadingWrapper} from "./food-image.style";
import {ReactComponent as LoadingIcon} from "assets/icons/spinner.svg";
import ImageUrlFormatter from "utils/image.utils";

const FoodImage = ({item}) => {
    const [isShowLoader, setIsShowLoader] = useState(true)
    const isShowAllImages = useSearchParams()[0].get('isShowAllImages') === 'true'

    if (item.isImageVisible || isShowAllImages) {
        return (
            <Wrapper>
                <img onLoad={() => setIsShowLoader(false)} src={ImageUrlFormatter.formatForMenuItemBig(item.imageUrl)}
                     alt="food image" />
                {isShowLoader && <LoadingWrapper className='animated_svg'>
                    <LoadingIcon />
                </LoadingWrapper>
                }
            </Wrapper>
        )
    }
}

export default FoodImage;