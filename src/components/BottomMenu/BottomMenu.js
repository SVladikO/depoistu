import {useNavigate} from 'react-router-dom';

import {Wrapper, MenuItem, Label} from './BottomMenu.style';

import {ReactComponent as HomeIcon} from "assets/icons/home.svg";
import {ReactComponent as MenuIcon} from "assets/icons/menu.svg";
import {ReactComponent as BookMarkIcon} from "assets/icons/book_mark.svg";
import {ReactComponent as UserIcon} from "assets/icons/user.svg";
// import {ReactComponent as HomeIcon} from "icons/menu.svg";
// import {OrderIconWithCounter} from 'index'

import {ROUTER} from "utils/config";
import {TRANSLATION, translate} from "utils/translation";

const BottomMenu = () => {
    const navigate = useNavigate();
    const isSelected = url => window.location.pathname === url;

    return (
        <Wrapper>
            {/*TODO: Hidden second version*/}
            {/*<NavLink to={ROUTER.ORDER_REVIEW.URL}>*/}
            {/*    <MenuItem selected={isSelected(ROUTER.ORDER_REVIEW.URL)}>*/}
            {/*        <OrderIconWithCounter selected={isSelected(ROUTER.ORDER_REVIEW.URL)}/>*/}
            {/*        <Label>Cart</Label>*/}
            {/*    </MenuItem>*/}
            {/*</NavLink>*/}
            <MenuItem
                selected={isSelected(ROUTER.SEARCH.URL)}
                onClick={() => navigate(ROUTER.SEARCH.URL)}
            >
                <HomeIcon/>
                <Label>{translate(TRANSLATION.BOTTOM_MENU.MAIN)}</Label>
            </MenuItem>
            <MenuItem
                selected={isSelected(ROUTER.SEARCH_DETAILS.URL)}
                onClick={() => navigate(ROUTER.SEARCH_DETAILS.URL)}
            >
                <MenuIcon/>
                <Label>Menu</Label>
            </MenuItem>
            <MenuItem
                selected={isSelected(ROUTER.FAVORITE.URL)}
                onClick={() => navigate(ROUTER.FAVORITE.URL)}
            >
                <BookMarkIcon/>
                <Label>Favorite</Label>
            </MenuItem>
            <MenuItem
                selected={isSelected(ROUTER.SETTING.URL)}
                onClick={() => navigate(ROUTER.SETTING.URL)}
            >
                <UserIcon/>
                <Label>{translate(TRANSLATION.BOTTOM_MENU.ACCOUNT_TAB)}</Label>
            </MenuItem>
        </Wrapper>
    );
};

export default BottomMenu;