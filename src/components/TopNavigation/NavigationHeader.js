import React from 'react';
import {Link, useParams} from "react-router-dom";

import {Wrapper, Title, NestedContent, MainContent} from "./NavigationHeader.style";

import {ROUTER} from "../../utils/config";
import {OrderIconWithCounter} from "../index";

import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";

const NavigationHeader = (props) => {
    const params = useParams();
    const {title, getTitle, href} = props;
    const _title = title || getTitle(params)

    return (
        <Wrapper>
            <MainContent>
                {href && <a href={href}><BackArrow/></a>}
                <Title>{_title}</Title>
                <Link to={ROUTER.ORDER_REVIEW.URL}>
                    <OrderIconWithCounter/>
                </Link>
            </MainContent>
            <NestedContent>
                {props.children}
            </NestedContent>
        </Wrapper>
    );
};

export default NavigationHeader;

