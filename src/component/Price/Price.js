import React from 'react';
import {Wrapper} from "./Price.style";

const Price = (props) => {
    const {currency} = props;
    return (
       <Wrapper>
           {currency}
           {props.children}
       </Wrapper>
    );
};

export default Price;