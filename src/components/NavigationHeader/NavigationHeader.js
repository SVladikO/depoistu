import React from 'react';

import {Wrapper, BackButton, Title} from "./NavigationHeader.style";

// import {ROUTER} from "WeekScheduleOutput.js/config";
// import {OrderIconWithCounter} from "index";

import {ReactComponent as BackArrow} from "assets/icons/back_arrow.svg";

import {useQuery} from "../../utils/hook";

const NavigationHeader = (props) => {
    let query = useQuery()
    const backUrl = query.get("backUrl") || props.backUrl;

    return (
        <Wrapper className='pm-NavigationHeader'>
                {backUrl &&
                    <BackButton to={backUrl}>
                            <BackArrow/>
                    </BackButton>
                }
                <Title>{props.title}</Title>
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

