import React from 'react';

import {Wrapper, BackButton, Title} from "./NavigationHeader.style";

// import {ROUTER} from "WeekScheduleOutput.js/config";
// import {OrderIconWithCounter} from "../index";

import {ReactComponent as BackArrow} from "assets/icons/back_arrow.svg";
import {Link} from "react-router-dom";

const NavigationHeader = (props) => {
    const {title, backUrl} = props;

    return (
        <Wrapper className='pm-NavigationHeader'>
                {backUrl &&
                    <Link to={backUrl}>
                        <BackButton className="back-button">
                            <BackArrow/>
                        </BackButton>
                    </Link>
                }
                <Title>{title}</Title>
                {/*TODO: Hidden second version*/}
                {/*<Link to={ROUTER.ORDER_REVIEW.URL}>*/}
                {/*    <OrderIconWithCounter hideOnZeroOrderAmount/>*/}
                {/*</Link>*/}
            {/*<NestedContent>*/}
            {/*    {props.children}*/}
            {/*</NestedContent>*/}
        </Wrapper>
    );
};

export default NavigationHeader;

