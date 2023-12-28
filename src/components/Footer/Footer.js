import React from 'react';
import {Link} from "react-router-dom";

import {Wrapper, Row, LocationInfo, Support} from './Footer.style';

import cristmasImgSrc from 'assets/images/cristmas.webp';
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
            <RowSplitter height={'100px'}/>
            <img src={cristmasImgSrc} alt="" style={{width: '100%'}}/>
            <Wrapper>
                <Row onClick={scrollToTop}>{translate(TR.PAGE.FOOTER.BACK_TO_TOP_BUTTON)}</Row>
                <Link to={URL.ABOUT_PROJECT}>
                    <Row>{translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_PROJECT)}</Row>
                </Link>
                <Support>
                    <a href="mailto:support@depoistu.com">support@depoistu.com</a>
                </Support>
                <LocationInfo>1.11.2023 Ukraine</LocationInfo>
            </Wrapper>
        </>
    );
};

export default Footer;