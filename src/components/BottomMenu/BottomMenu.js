import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

import {Wrapper, MenuItem, OrderButton} from './BottomMenu.style';

import {ReactComponent as HomeIcon} from "assets/icons/home.svg";
import {ReactComponent as MenuIcon} from "assets/icons/menu.svg";
import {ReactComponent as OrderIcon} from "assets/icons/order.svg";
import {ReactComponent as SettingIcon} from "assets/icons/setting.svg";

import {ROUTER, URL} from "utils/config";
import {TRANSLATION, translate} from "utils/translation";
import {useSelector} from "react-redux";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";

const BottomMenu = () => {
    const companyId = useSelector(state => state.searchDetails.companyId);
    const navigate = useNavigate();
    //duplication
    const isSelected = url => window.location.pathname === url;

    return (
        <Wrapper>
            {/*TODO: Hidden second version*/}
            <MenuItem
                selected={isSelected(ROUTER.SEARCH.URL)}
                onClick={() => navigate(ROUTER.SEARCH.URL)}
            >
                <HomeIcon/>
                <span>{translate(TRANSLATION.BOTTOM_MENU.SEARCH)}</span>
            </MenuItem>

            <MenuItem
                selected={isSelected(`${URL.SEARCH_DETAILS}/${companyId}`)}
                onClick={() => navigate(`${ROUTER.SEARCH_DETAILS.URL}/${companyId}`)}
            >
                <MenuIcon/>
                <span>{translate(TRANSLATION.BOTTOM_MENU.MENU)}</span>
            </MenuItem>
            <ScrollUpButton/>
            <MenuItem
                selected={isSelected(URL.ORDER)}
                onClick={() => navigate(ROUTER.ORDER.URL)}
            >
                <OrderIcon/>
                <span>{translate(TRANSLATION.BOTTOM_MENU.ORDER)}</span>
            </MenuItem>

            <MenuItem
                selected={isSelected(ROUTER.SETTING.URL)}
                onClick={() => navigate(ROUTER.SETTING.URL)}
            >
                <SettingIcon/>
                <span>{translate(TRANSLATION.BOTTOM_MENU.SETTINGS)}</span>
            </MenuItem>
        </Wrapper>
    );
};

const OrderButtonNavigation = ({isSelected}) => {
    const navigate = useNavigate();

    const [isOpen, setOpen] = useState(false);
    const {menuItems} = useSelector(state => state.searchDetails)
    const allMenuItemsAmount = menuItems.reduce((acc, cur) => acc + cur.amount_1 + cur.amount_2 + cur.amount_3, 0)

    const animationEndHandler = () => setOpen(false);

    useEffect(() => {
        setOpen(true)
    }, [allMenuItemsAmount]);

    return (
        <OrderButton
            isSelected={isSelected}
            onClick={() => {
                navigate(ROUTER.ORDER.URL)
                setOpen(true)
            }}
            onAnimationEnd={event => animationEndHandler(event)}
            className={isOpen ? 'animate_order_counter' : ''}
        >
            {allMenuItemsAmount}
        </OrderButton>
    )
}

export default BottomMenu;