import {useState} from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';

import {
    Wrapper,
    InnerWrapper,
    FoodImage,
} from "./MenuItem.style";

import {ReactComponent as ZoomIcon} from "assets/icons/zoom.svg";
import imgSrc from 'assets/images/default/default_menu_item.webp';

import {Popup} from "components";
import MenuItemDescription from "./view/menu-item-description/menu-item-description";
import MenuItemBottomSettings from "./view/menu-item-bottom-settings/menu-item-bottom-settings";
import ImageUrlFormatter from "../../utils/image.utils";

const MenuItem = (props) => {
    const {item} = props;
    const [isVisible, setIsVisible] = useState(!!item.isVisible)

    const imageUrl = item.imageUrl || imgSrc; //'https://res.cloudinary.com/dgdm0wb3u/image/upload/v1702652038/sypvmh6pkllv4wem5mu2.webp'

    return (
        <Wrapper
            isVisible={isVisible}
            className='pm-MenuItem'
        >
            <FoodImage src={ImageUrlFormatter.formatForMenuItemBig(imageUrl)} />
            <InnerWrapper>
                <MenuItemDescription
                    {...props}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
            </InnerWrapper>
            <MenuItemBottomSettings {...props} />
        </Wrapper>
    );
};

export default MenuItem;