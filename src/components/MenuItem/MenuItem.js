import {useState} from "react";

import {
    Wrapper,
    FoodImageWrapper,
    FoodImage,
} from "./MenuItem.style";

import {CATEGORY_ROW_HEIGHT} from "../../page-view/category-menu-view/CategoryMenuView";

import MenuItemDescription from "./view/menu-item-description/menu-item-description";
import MenuItemBottomSettings from "./view/menu-item-bottom-settings/menu-item-bottom-settings";
import ImageUrlFormatter from "utils/image.utils";

const MenuItem = (props) => {
    const {
        item, isSelected, onSelectMenuItem = () => {
        }
    } = props;
    const [isItemVisible, setIsItemVisible] = useState(!!item.isVisible)
    const [isImageVisible, setIsImageVisible] = useState(false)

    const onDesciptionClick = e => {
        onSelectMenuItem()
        setIsImageVisible(true)
        console.log(1111, e);
        console.log(2222, e.currentTarget);
        const scrollTo = e.currentTarget.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: scrollTo, behavior: "smooth"});
    }

    return (
        <Wrapper
            className='pm-MenuItem'
            isItemVisible={isItemVisible}
            onClick={onDesciptionClick}
        >
            {isImageVisible &&
                <FoodImageWrapper>
                    <FoodImage src={ImageUrlFormatter.formatForMenuItemBig(item.imageUrl)}/>
                </FoodImageWrapper>
            }
            <MenuItemDescription
                {...props}
                isSelected={isSelected}
                isItemVisible={isItemVisible}
                wasImageShow={isImageVisible}
                isSwitchImageVisible={!!item.imageUrl}
            />
            <MenuItemBottomSettings {...props} isItemVisible={isItemVisible} setIsItemVisible={setIsItemVisible}/>
        </Wrapper>
    );
};

export default MenuItem;