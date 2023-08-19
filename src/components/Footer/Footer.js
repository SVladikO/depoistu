import React from 'react';
import {Wrapper, LinkItem, LocationInfo} from './Footer.style';
import {URL} from "../../utils/config";
import {translate, TRANSLATION as TR} from "../../utils/translation";


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Wrapper>
            <LinkItem to={URL.CUSTOMER_COMPANIES}>{translate(TR.PAGE.SETTINGS.GROUP_TITLE.FOR_BUSINESS)}</LinkItem>
            <LinkItem to={URL.ABOUT_US}>{translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_US)}</LinkItem>
            <LinkItem to={URL.OUR_TEAM}>{translate(TR.PAGE.OUR_TEAM.TOP_TITLE)}</LinkItem>
            <LinkItem onClick={scrollToTop}>{translate(TR.PAGE.FOOTER.BACK_TO_TOP_BUTTON)}</LinkItem>
            <LinkItem to={'https://depoistu-develop.onrender.com/'}>depoistu.support@gmail.com</LinkItem>
            <LocationInfo>1.11.2023 Kyiv</LocationInfo>
        </Wrapper>
    );
};

export default Footer;