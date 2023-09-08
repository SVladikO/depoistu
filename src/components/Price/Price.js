import React from 'react';
import {Wrapper} from "./Price.style";

const Price = ({children}) => {
    return (
       <Wrapper>₴ {children}</Wrapper>
    );
};

export default Price;