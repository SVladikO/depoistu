import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {Wrapper, Row, LocationInfo, Support, Question} from './Footer.style';

import {ReactComponent as ThumbUpClickedIcon} from "../../assets/icons/thump-up-clicked.svg";
import {ReactComponent as ThumbDownNotClickedIcon} from "../../assets/icons/thump-down-not-clicked.svg";

import {RowSplitter} from "../index";

import {URL} from "../../utils/config";
import {translate, TRANSLATION as TR} from "../../utils/translation";


const Footer = () => {
    const [isLike, setIsLike] = useState()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const onLikeWebsite = () => setIsLike(true)
    const onDislikeWebsite = () => setIsLike(false)

    return (
        <>
            <RowSplitter height={'241px'}/>
            <Wrapper>
                <Question justifyContent="center" alignItems="center" gap={'10px'}>
                    <span>{translate(TR.PAGE.SETTINGS.GROUP_TITLE.DO_YOU_LIKE)}</span>
                    {isLike === undefined
                        ? (
                            <>
                                <ThumbDownNotClickedIcon onClick={onLikeWebsite} className="reversed unClicked"/>
                                <ThumbDownNotClickedIcon onClick={onDislikeWebsite} className="unClicked"/>
                            </>
                        ) : isLike ? (
                            <>
                                <ThumbUpClickedIcon/>
                                <ThumbDownNotClickedIcon/>
                            </>
                        ) : (
                            <>
                                <ThumbDownNotClickedIcon className="reversed"/>
                                <ThumbUpClickedIcon className="reversed"/>
                            </>
                        )}
                </Question>
                <Row onClick={scrollToTop}>{translate(TR.PAGE.FOOTER.BACK_TO_TOP_BUTTON)}</Row>
                <Link to={URL.CUSTOMER_COMPANIES}>
                    <Row>{translate(TR.PAGE.SETTINGS.GROUP_TITLE.FOR_BUSINESS)}</Row>
                </Link>
                <Link to={URL.ABOUT_US}>
                    <Row>{translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_US)}</Row>
                </Link>
                <Link to={URL.OUR_TEAM}>
                    <Row>{translate(TR.PAGE.OUR_TEAM.TOP_TITLE)}</Row>
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