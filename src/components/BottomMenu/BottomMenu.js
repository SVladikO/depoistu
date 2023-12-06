import {useNavigate} from 'react-router-dom';

import {Wrapper, MenuItem, Label} from './BottomMenu.style';

import {ReactComponent as HomeIcon} from "assets/icons/home.svg";
import {ReactComponent as MenuIcon} from "assets/icons/menu.svg";
import {ReactComponent as BookMarkIcon} from "assets/icons/book_mark.svg";
import {ReactComponent as SettingIcon} from "assets/icons/setting.svg";

import {ROUTER, URL} from "utils/config";
import {TRANSLATION, translate} from "utils/translation";
import {useSelector} from "react-redux";

const BottomMenu = () => {
    const companyId = useSelector(state => state.searchDetailsPage.companyId);
    const navigate = useNavigate();
    const isSelected = url => window.location.pathname === url;

    return (
        <Wrapper>
            {/*TODO: Hidden second version*/}
            <MenuItem
                selected={isSelected(ROUTER.SEARCH.URL)}
                onClick={() => navigate(ROUTER.SEARCH.URL)}
            >
                <HomeIcon/>
                <Label>{translate(TRANSLATION.BOTTOM_MENU.MAIN)}</Label>
            </MenuItem>
            <MenuItem
                selected={isSelected(`${URL.SEARCH_DETAILS}/${companyId}`)}
                onClick={() => {
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
                <SettingIcon/>
                <Label>{translate(TRANSLATION.BOTTOM_MENU.SETTINGS)}</Label>
            </MenuItem>
        </Wrapper>
    );
};

export default BottomMenu;