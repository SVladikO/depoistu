import React from 'react';
import {Wrapper} from "./Price.style";

const Price = ({children}) => {
    return (
       <Wrapper>
           {children}.00 UAH
       </Wrapper>
    );
};

export default Price;