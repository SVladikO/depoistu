import React from 'react';
import {Wrapper, Title} from "./NavigationHeader.style";

const NavigationHeader = (props) => {
    const {title, icon} = props;
    return (
        <Wrapper>
            {icon && <props.icon />}
            <Title>{title}</Title>
        </Wrapper>
    );
};

export default NavigationHeader;
