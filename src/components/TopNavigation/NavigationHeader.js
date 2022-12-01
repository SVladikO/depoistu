import React from 'react';
import {BackgroundWrapper, Wrapper, Title} from "./NavigationHeader.style";
import {ReactComponent as BackArrow} from "../../icons/back_arrow.svg";

const NavigationHeader = (props) => {
    const {title, href} = props;
    return (
            <Wrapper>
                {href && <a href={href}><BackArrow/></a>}
                <Title>{title}</Title>
            </Wrapper>
    );
};

export default NavigationHeader;

