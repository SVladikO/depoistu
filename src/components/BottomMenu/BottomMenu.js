import {NavLink} from 'react-router-dom';

import {Wrapper, MenuItem, Label} from './BottomMenu.style';

import {ReactComponent as SearchIcon} from "../../assets/icons/search.svg";
import {ReactComponent as UserIcon} from "../../assets/icons/user.svg";
// import {ReactComponent as HomeIcon} from "../../icons/menu.svg";
// import {OrderIconWithCounter} from '../index'

import {ROUTER} from "../../utils/config";
import {TRANSLATION, translate} from "../../utils/translation";

const BottomMenu = () => {
    const isSelected = url => window.location.pathname === url;

    return (
        <Wrapper className='ta-BottomMenu'>
            {/*TODO: Hidden second version*/}
            {/*<NavLink to={ROUTER.CATEGORY.URL}>*/}
            {/*    <MenuItem selected={isSelected(ROUTER.CATEGORY.URL)}>*/}
            {/*        <HomeIcon/>*/}
            {/*        <Label>Menu</Label>*/}
            {/*    </MenuItem>*/}
            {/*</NavLink>*/}
            {/*<NavLink to={ROUTER.ORDER_REVIEW.URL}>*/}
            {/*    <MenuItem selected={isSelected(ROUTER.ORDER_REVIEW.URL)}>*/}
            {/*        <OrderIconWithCounter selected={isSelected(ROUTER.ORDER_REVIEW.URL)}/>*/}
            {/*        <Label>Cart</Label>*/}
            {/*    </MenuItem>*/}
            {/*</NavLink>*/}
            <NavLink to={ROUTER.SEARCH.URL}>
                <MenuItem selected={isSelected(ROUTER.SEARCH.URL)}>
                    <SearchIcon/>
                    <Label>{translate(TRANSLATION.BOTTOM_MENU.SEARCH_TAB)}</Label>
                </MenuItem>
            </NavLink>
            <NavLink to={ROUTER.SETTING.URL}>
                <MenuItem selected={isSelected(ROUTER.SETTING.URL)}>
                    <UserIcon/>
                    <Label>{translate(TRANSLATION.BOTTOM_MENU.ACCOUNT_TAB)}</Label>
                </MenuItem>
            </NavLink>
        </Wrapper>
    );
};

export default BottomMenu;