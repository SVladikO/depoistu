import {NavLink} from 'react-router-dom';

import {Wrapper, MenuItem, Label} from './BottomMenu.style';

import {ReactComponent as SearchIcon} from "../../icons/search.svg";
import {ReactComponent as UserIcon} from "../../icons/user.svg";
// import {ReactComponent as HomeIcon} from "../../icons/menu.svg";
// import {OrderIconWithCounter} from '../index'

import {ROUTER} from "../../utils/config";
import {resolveTranslation} from "../../utils/utils";

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
                    <Label>{resolveTranslation(["BOTTOM_MENU_SEARCH"])}</Label>
                </MenuItem>
            </NavLink>
            <NavLink to={ROUTER.SETTING.URL}>
                <MenuItem selected={isSelected(ROUTER.SETTING.URL)}>
                    <UserIcon/>
                    <Label>{resolveTranslation("BOTTOM_MENU_SEARCH")}</Label>
                </MenuItem>
            </NavLink>
        </Wrapper>
    );
};

export default BottomMenu;