import {
    Wrapper,
    ContentWrapper,
    NewFlag
} from "./MenuItem.style";

import {CATEGORY_ROW_HEIGHT} from "../../page-view/category-menu-view/category-menu-view";

import TitleIcon from "./view/title-icon/title-icon";
import MenuItemDescription from "./view/menu-item-description/menu-item-description";
import MenuItemBottomSettings from "./view/menu-item-bottom-settings/menu-item-bottom-settings";
import MenuItemPriceSizeControl from "./view/menu-item-price-size-controll/menu-item-price-size-controll";
import FoodImage from "./view/food-image/food-image";

const MenuItem = (props) => {

    const {
        item,
        isNewItemFlag,
        isCompanyVerified,
        isEditMenuItemPage = false,
        isOrderHistoryDetailsPage = false,
        onSelectMenuItem = () => {}
    } = props;

    const onClickMenuItem = e => {
        onSelectMenuItem()
        const scrollTo = e.currentTarget.offsetTop - CATEGORY_ROW_HEIGHT;
        window.scroll({top: scrollTo, behavior: "smooth"});
    }

    return (
        <Wrapper
            className='pm-MenuItem'
            isVisibleForCustomers={item.isVisible || isOrderHistoryDetailsPage}
            onClick={onClickMenuItem}
        >
            {isCompanyVerified && <FoodImage {...props}/>}
            {isNewItemFlag && <NewFlag>New</NewFlag>}
            <ContentWrapper>
                <TitleIcon {...props} isCompanyVerified={isCompanyVerified}/>
                <MenuItemDescription {...props}/>
                <MenuItemPriceSizeControl {...props} />
            </ContentWrapper>
F            {isEditMenuItemPage &&  <MenuItemBottomSettings {...props} />}
        </Wrapper>
    );
};

export default MenuItem;