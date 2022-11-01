import React from 'react';
import {Wrapper} from "./Rating.style";
import {ReactComponent as RateIcon} from "../../icons/rate_star.svg";

const Rating = (props) => {
    return (
       <Wrapper>
           {props.children}
           <RateIcon/>
       </Wrapper>
    );
};

export default Rating;