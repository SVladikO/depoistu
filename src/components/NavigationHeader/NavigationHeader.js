import React from 'react';

import {Wrapper, BackButton, Title} from "./NavigationHeader.style";

// import {ROUTER} from "../../WeekScheduleOutput.js/config";
// import {OrderIconWithCounter} from "../index";

import {ReactComponent as BackArrow} from "../../assets/icons/back_arrow.svg";

const NavigationHeader = (props) => {
    const {title, showBackButton} = props;

    return (
        <Wrapper className='pm-NavigationHeader' id="NavigationHeader">
            {!showBackButton &&
                <BackButton className="back-button" onClick={() => window.history.back()}>
                    <BackArrow/>
                </BackButton>
            }
            <Title>{title}</Title>
            {/*TODO: Hidden second version*/}
            {/*<Link to={ROUTER.ORDER_REVIEW.URL}>*/}
            {/*    <OrderIconWithCounter hideOnZeroOrderAmount/>*/}
            {/*</Link>*/}
            {/*    <NestedContent>*/}
            {/*{props.children}*/}
            {/*    </NestedContent>*/}
        </Wrapper>
    );
};

export default NavigationHeader;

