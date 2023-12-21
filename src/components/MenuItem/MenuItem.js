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
    const [isItemVisible, setIsItemVisible] = useState(!!item.isVisible)
    const [isImageVisible, setIsImageVisible] = useState(false)

    return (
        <Wrapper
            className='pm-MenuItem'
            isItemVisible={isItemVisible}
        >
            {isImageVisible && <FoodImage src={ImageUrlFormatter.formatForMenuItemBig(item.imageUrl)}/>}
            <MenuItemDescription
                {...props}
                isItemVisible={isItemVisible}
                wasImageShow={isImageVisible}
                isSwitchImageVisible={!!item.imageUrl}
                switchImageVisibility={() => setIsImageVisible(!isImageVisible)}
            />
            <MenuItemBottomSettings {...props} isItemVisible={isItemVisible} setIsItemVisible={setIsItemVisible}/>
        </Wrapper>
    );
};

export default MenuItem;