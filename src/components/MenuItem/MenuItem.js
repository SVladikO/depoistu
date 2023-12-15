import {useState} from "react";
import {
    Wrapper,
    InnerWrapper,
    FoodImage,
    FoodImageWrapper,
    FoodImg,
} from "./MenuItem.style";

import {ReactComponent as ZoomIcon} from "assets/icons/zoom.svg";
import imgSrc from 'assets/images/default/default_menu_item.webp';

import {Popup } from "components";
import MenuItemDescription from "./view/menu-item-description/menu-item-description";
import MenuItemBottomSettings from "./view/menu-item-bottom-settings/menu-item-bottom-settings";

const MenuItem = (props) => {
    const {item} = props;
    const [isVisible, setIsVisible] = useState(!!item.isVisible)
    const [selectedImgSrc, setSelectedImgSrc] = useState('');

    const MenuItemPopup = () => (
        !!selectedImgSrc && (
            <Popup.Bottom onClose={() => setSelectedImgSrc('')}>
                <FoodImg src={selectedImgSrc} />
                <MenuItemDescription {...props} />
            </Popup.Bottom>
        )
    )

    const imageUrl = item.imageUrl || imgSrc; //'https://res.cloudinary.com/dgdm0wb3u/image/upload/v1702652038/sypvmh6pkllv4wem5mu2.webp'

    return (
        <Wrapper
            isVisible={isVisible}
            className='pm-MenuItem'
        >
            <InnerWrapper>
                <MenuItemDescription
                    {...props}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
                <FoodImageWrapper>
                    <FoodImage src={imageUrl} onClick={() => setSelectedImgSrc(imageUrl)}/>
                    <ZoomIcon/>
                </FoodImageWrapper>
            </InnerWrapper>
            <MenuItemPopup />
            <MenuItemBottomSettings {...props} />
        </Wrapper>
    );
};

export default MenuItem;