import React from 'react';

import {Wrapper, BackButton, Title} from "./NavigationHeader.style";

import {ReactComponent as BackArrow} from "assets/icons/back_arrow.svg";

import {useQuery} from "utils/hook";

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
        </Wrapper>
    );
};

export default NavigationHeader;

