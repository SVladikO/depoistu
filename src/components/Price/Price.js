import React from 'react';
import {Wrapper} from "./Price.style";
import {translate, TRANSLATION} from "../../utils/translation";

const Price = ({children}) => {
    return (
       <Wrapper>
           {children} {translate(TRANSLATION.MEASUREMENTS.PRICE)}
       </Wrapper>
    );
};

export default Price;