import React from 'react';
import {Wrapper} from "./Price.style";

const Price = ({small = false, children}) => {
    return (
       <Wrapper small={small}>
           {children}.00 UAH
       </Wrapper>
    );
};

export default Price;