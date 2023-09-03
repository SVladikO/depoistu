import React from 'react';
import {Link} from "react-router-dom";

import {Wrapper, Row, LocationInfo, Support} from './Footer.style';
import {URL} from "../../utils/config";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {RowSplitter} from "../index";


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <RowSplitter height={'200px'}/>
            <Wrapper>
                <Link to={URL.CUSTOMER_COMPANIES}>
                    <Row>{translate(TR.PAGE.SETTINGS.GROUP_TITLE.FOR_BUSINESS)}</Row>
                </Link>
                <Link to={URL.ABOUT_US}>
                    <Row>{translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_US)}</Row>
                </Link>
                <Link to={URL.OUR_TEAM}>
                    <Row>{translate(TR.PAGE.OUR_TEAM.TOP_TITLE)}</Row>
                </Link>
                <Link>
                    <Row onClick={scrollToTop}>{translate(TR.PAGE.FOOTER.BACK_TO_TOP_BUTTON)}</Row>
                </Link>
                <Support>
                    <a href="mailto:support@depoistu.com">support@depoistu.com</a>
                </Support>
                <LocationInfo>1.11.2023 Kyiv</LocationInfo>
            </Wrapper>
        </>
    );
};

export default Footer;