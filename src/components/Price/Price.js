import React from 'react';
import {Wrapper} from "./Price.style";

const Price = (props) => {
    console.log(props);
    return (
       <Wrapper>
           ${props.children}
       </Wrapper>
    );
};

export default Price;