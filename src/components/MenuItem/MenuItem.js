import {useState} from "react";
import {useDispatch} from "react-redux";

import {
    Wrapper,
    FoodImageWrapper,
    FoodImage,
} from "./MenuItem.style";

import {makeMenuItemImageVisible} from "features/searchDetails/searchDetailsSlice";


import {CATEGORY_ROW_HEIGHT} from "../../page-view/category-menu-view/CategoryMenuView";

import MenuItemDescription from "./view/menu-item-description/menu-item-description";
import MenuItemBottomSettings from "./view/menu-item-bottom-settings/menu-item-bottom-settings";
import ImageUrlFormatter from "utils/image.utils";

const MenuItem = (props) => {
    const dispatch = useDispatch()

    const {
        item,
        isSelected,
        onSelectMenuItem = () => {
        }
    } = props;
    const [isItemVisible, setIsItemVisible] = useState(!!item.isVisible)

    const onDesciptionClick = e => {
        onSelectMenuItem()
        dispatch(makeMenuItemImageVisible({id: item.id}));
        const scrollTo = e.currentTarget.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: scrollTo, behavior: "smooth"});
    }

    return (
        <Wrapper
            className='pm-MenuItem'
            isItemVisible={isItemVisible}
            onClick={onDesciptionClick}
        >
            {item.isImageVisible &&
                <FoodImageWrapper>
                    <FoodImage src={ImageUrlFormatter.formatForMenuItemBig(item.imageUrl)}/>
                </FoodImageWrapper>
            }
            <MenuItemDescription
                {...props}
                isSelected={isSelected}
                isItemVisible={isItemVisible}
            />
            <MenuItemBottomSettings {...props} isItemVisible={isItemVisible} setIsItemVisible={setIsItemVisible}/>
        </Wrapper>
    );
};

export default MenuItem;