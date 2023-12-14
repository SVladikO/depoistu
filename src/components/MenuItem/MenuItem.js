import {useState} from "react";
import {
    Wrapper,
    InnerWrapper,
    FoodImage,
    FoodImageWrapper,
    FoodImg,
} from "./MenuItem.style";

import {ReactComponent as ZoomIcon} from "assets/icons/zoom.svg";

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
                    <FoodImage src={item.imageUrl} onClick={() => setSelectedImgSrc(item.imageUrl)}/>
                    <ZoomIcon/>
                </FoodImageWrapper>
            </InnerWrapper>
            <MenuItemPopup />
            <MenuItemBottomSettings {...props} />
        </Wrapper>
    );
};

export default MenuItem;