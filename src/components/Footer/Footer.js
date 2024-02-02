import React from 'react';
import {Link} from "react-router-dom";

import {Wrapper, Row, LocationInfo, Support} from './Footer.style';

import {RowSplitter} from "components";

import {URL} from "utils/config";
import {translate, TRANSLATION as TR} from "utils/translation";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <RowSplitter height={'300px'}/>
            <Wrapper>
                <Row onClick={scrollToTop}>{translate(TR.PAGE.FOOTER.BACK_TO_TOP_BUTTON)}</Row>
                <Link to={URL.ABOUT_PROJECT}>
                    <Row>{translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_PROJECT)}</Row>
                </Link>
                <Row>
                    <a href="mailto:support@depoistu.com">support@depoistu.com</a>
                </Row>
                <Row>
                    <LocationInfo>1.11.2023 Ukraine</LocationInfo>
                </Row>
            </Wrapper>
        </>
    );
};

export default Footer;