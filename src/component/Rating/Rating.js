import React from 'react';
import {Wrapper} from "./Rating.style";

const Rating = (props) => {
    return (
       <Wrapper>
           {props.children}
       </Wrapper>
    );
};

export default Rating;