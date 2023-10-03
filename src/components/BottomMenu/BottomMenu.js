import {useNavigate} from 'react-router-dom';

import {Wrapper, MenuItem, Label} from './BottomMenu.style';

import {ReactComponent as HomeIcon} from "assets/icons/home.svg";
import {ReactComponent as MenuIcon} from "assets/icons/menu.svg";
import {ReactComponent as BookMarkIcon} from "assets/icons/book_mark.svg";
import {ReactComponent as UserIcon} from "assets/icons/user.svg";
// import {ReactComponent as HomeIcon} from "icons/menu.svg";
// import {OrderIconWithCounter} from 'index'

import {ROUTER, URL} from "utils/config";
import {TRANSLATION, translate} from "utils/translation";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/localStorage";

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
                selected={isSelected(`${URL.SEARCH_DETAILS}/${LocalStorage.get(LOCAL_STORAGE_KEY.SEARCH_DETAILS_SELECTED_COMPANY_ID)}`)}
                onClick={() => {
                    const companyId = LocalStorage.get(LOCAL_STORAGE_KEY.SEARCH_DETAILS_SELECTED_COMPANY_ID)
                    navigate(`${ROUTER.SEARCH_DETAILS.URL}/${companyId}`)
                }}
            >
                <MenuIcon/>
                <Label>{translate(TRANSLATION.BOTTOM_MENU.MENU)}</Label>
            </MenuItem>
            <MenuItem
                selected={isSelected(URL.FAVORITE)}
                onClick={() => navigate(ROUTER.FAVORITE.URL)}
            >
                <BookMarkIcon/>
                <Label>{translate(TRANSLATION.BOTTOM_MENU.FAVORITE)}</Label>
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