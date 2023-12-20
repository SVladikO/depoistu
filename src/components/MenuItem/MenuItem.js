import {useState} from "react";

import {
    Wrapper,
    FoodImage,
} from "./MenuItem.style";

import MenuItemDescription from "./view/menu-item-description/menu-item-description";
import MenuItemBottomSettings from "./view/menu-item-bottom-settings/menu-item-bottom-settings";
import ImageUrlFormatter from "utils/image.utils";

const MenuItem = (props) => {
    const {item} = props;
    const [isVisible, setIsVisible] = useState(!!item.isVisible)
    const [isImageVisible, setIsImageVisible] = useState(false)

    const imageUrl = item.imageUrl;

    return (
        <Wrapper
            isVisible={isVisible}
            className='pm-MenuItem'
        >
            {isImageVisible && <FoodImage src={ImageUrlFormatter.formatForMenuItemBig(imageUrl)}/>}
            <MenuItemDescription
                {...props}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                isSwitchImageVisible={!!item.imageUrl}
                switchImageVisibility={() => setIsImageVisible(!isImageVisible)}
            />
            <MenuItemBottomSettings {...props} />
        </Wrapper>
    );
};

export default MenuItem;