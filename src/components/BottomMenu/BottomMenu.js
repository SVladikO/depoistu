import {useNavigate} from 'react-router-dom';

import {Wrapper, MenuItem, Label} from './BottomMenu.style';

import {ReactComponent as SearchIcon} from "assets/icons/search.svg";
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
                    <MenuItem
                        selected={isSelected(ROUTER.SEARCH.URL)}
                        onClick={() => navigate(ROUTER.SEARCH.URL)}
                    >
                        <SearchIcon/>
                        <Label>{translate(TRANSLATION.BOTTOM_MENU.SEARCH_TAB)}</Label>
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