import {NavLink} from 'react-router-dom';

import {Wrapper, MenuItem, Label, PurchaseCounter} from './BottomMenu.style';

import {ReactComponent as HomeIcon} from "../../icons/menu.svg";
import {ReactComponent as CartIcon} from "../../icons/cart.svg";
import {ReactComponent as SearchIcon} from "../../icons/search.svg";
import {ReactComponent as UserIcon} from "../../icons/user.svg";

import {ROUTER} from "../../utils/config";

const BottomMenu = ({basket}) => {

    const isSelected = url => window.location.pathname === url;

    return (
        <Wrapper>
            <NavLink to={ROUTER.CATEGORY.URL}>
                <MenuItem selected={isSelected(ROUTER.CATEGORY.URL)}>
                    <HomeIcon/>
                    <Label>Menu</Label>
                </MenuItem>
            </NavLink>
            <NavLink to={ROUTER.ORDER_REVIEW.URL}>
                <MenuItem selected={isSelected(ROUTER.ORDER_REVIEW.URL)}>
                    <CartIcon/>
                    <Label>Cart</Label>
                    {basket ? <PurchaseCounter>{basket}</PurchaseCounter> : null}
                </MenuItem>
            </NavLink>
            <NavLink to={''}>
                <MenuItem selected={isSelected('')}>
                    <SearchIcon/>
                    <Label>Search</Label>
                </MenuItem>
            </NavLink>
            <NavLink to={ROUTER.SETTING.URL}>
                <MenuItem selected={isSelected(ROUTER.SETTING.URL)}>
                    <UserIcon/>
                    <Label>Account</Label>
                </MenuItem>
            </NavLink>
        </Wrapper>
    );
};

export default BottomMenu;