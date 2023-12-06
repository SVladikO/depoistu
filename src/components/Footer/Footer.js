import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {Wrapper, Row, LocationInfo, Support, Question} from './Footer.style';

import {ReactComponent as ThumbUpClickedIcon} from "assets/icons/thump-up-clicked.svg";
import {ReactComponent as ThumbDownNotClickedIcon} from "assets/icons/thump-down-not-clicked.svg";
import cristmasImgSrc from 'assets/images/cristmas.webp';
import {RowSplitter} from "components";

import {URL} from "utils/config";
import {translate, TRANSLATION as TR} from "utils/translation";

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
            <RowSplitter height={'100px'}/>
            <img src={cristmasImgSrc} alt="" style={{width: '100%'}}/>
            <Wrapper>
                {/*TODO: DO you like this website BE part will be added a bit later as it isn't hight priority */}
                {/*{customer && (*/}
                {/*    <Question justifyContent="center" alignItems="center" gap={'10px'}>*/}
                {/*        <span>{translate(TR.PAGE.SETTINGS.GROUP_TITLE.DO_YOU_LIKE)}</span>*/}
                {/*        {isLike === undefined*/}
                {/*            ? (*/}
                {/*                <>*/}
                {/*                    <ThumbDownNotClickedIcon onClick={onLikeWebsite} className="reversed unClicked"/>*/}
                {/*                    <ThumbDownNotClickedIcon onClick={onDislikeWebsite} className="unClicked"/>*/}
                {/*                </>*/}
                {/*            ) : isLike ? (*/}
                {/*                <>*/}
                {/*                    <ThumbUpClickedIcon/>*/}
                {/*                    <ThumbDownNotClickedIcon/>*/}
                {/*                </>*/}
                {/*            ) : (*/}
                {/*                <>*/}
                {/*                    <ThumbDownNotClickedIcon className="reversed"/>*/}
                {/*                    <ThumbUpClickedIcon className="reversed"/>*/}
                {/*                </>*/}
                {/*            )}*/}
                {/*    </Question>*/}
                {/*)*/}
                {/*}*/}
                <Row onClick={scrollToTop}>{translate(TR.PAGE.FOOTER.BACK_TO_TOP_BUTTON)}</Row>
                <Link to={URL.ABOUT_PROJECT}>
                    <Row>{translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_PROJECT)}</Row>
                </Link>
                <Link to={URL.OUR_TEAM}>
                    <Row>{translate(TR.PAGE.OUR_TEAM.TOP_TITLE)}</Row>
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