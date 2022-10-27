import React from 'react';
import {StyledContainer} from "./Container.style";

const Container = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

export default Container;