import {useState} from "react";

import {
    Wrapper,
    ContentWrapper,
    NewFlag
} from "./MenuItem.style";

import {CATEGORY_ROW_HEIGHT} from "page-view/category-menu-view/CategoryMenuView";

import TitleIcon from "./view/title-icon/title-icon";
import MenuItemDescription from "./view/menu-item-description/menu-item-description";
import MenuItemBottomSettings from "./view/menu-item-bottom-settings/menu-item-bottom-settings";
import MenuItemPriceSizeControl from "./view/menu-item-price-size-controll/menu-item-price-size-controll";
import FoodImage from "./view/food-image/food-image";

const MenuItem = (props) => {

    const {
        item,
        isSelected,
        isNewItemFlag,
        isOrderPage = false,
        isEditMenuItemPage = false,
        isOrderHistoryDetailsPage = false,
        onSelectMenuItem = () => {
        }
    } = props;

    const [isVisibleForCustomers, setIsVisibleForCustomers] = useState(!!item.isVisible || isOrderPage || isOrderHistoryDetailsPage)

    const onClickMenuItem = e => {
        onSelectMenuItem()
        const scrollTo = e.currentTarget.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: scrollTo, behavior: "smooth"});
    }

    return (
        <Wrapper
            className='pm-MenuItem'
            isVisibleForCustomers={isVisibleForCustomers}
            onClick={onClickMenuItem}
        >
            <FoodImage {...props}/>
            {isNewItemFlag && <NewFlag>New</NewFlag>}
            <ContentWrapper>
                <TitleIcon {...props} />
                <MenuItemDescription {...props}/>
                <MenuItemPriceSizeControl
                    {...props}
                    isSelected={isSelected}
                    isItemVisible={isVisibleForCustomers}
                />
            </ContentWrapper>
            {isEditMenuItemPage && (
                <MenuItemBottomSettings
                    {...props}
                    isItemVisible={isVisibleForCustomers}
                    setIsItemVisible={setIsVisibleForCustomers}
                />
            )
            }
        </Wrapper>
    );
};

export default MenuItem;