import React from 'react';
import {useParams, Link} from "react-router-dom";

import {Wrapper, Title, NestedContent, MainContent} from "./NavigationHeader.style";

// import {ROUTER} from "../../utils/config";
// import {OrderIconWithCounter} from "../index";

import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";

const NavigationHeader = (props) => {
    const params = useParams();
    const {title, getTitle, backUrl} = props;
    let _title = title || getTitle(params)

    return (
            <Wrapper className='pm-NavigationHeader'>
                <MainContent>
                    {backUrl && <Link to={typeof backUrl === "function" ? backUrl() : backUrl} className='pma-back-link'><BackArrow /></Link>}
                    <Title>{_title}</Title>
                    {/*TODO: Hidden second version*/}
                    {/*<Link to={ROUTER.ORDER_REVIEW.URL}>*/}
                    {/*    <OrderIconWithCounter hideOnZeroOrderAmount/>*/}
                    {/*</Link>*/}
                </MainContent>
                <NestedContent>
                    {props.children}
                </NestedContent>
            </Wrapper>
    );
};

export default NavigationHeader;

