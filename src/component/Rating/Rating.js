import React from 'react';
import {Wrapper, Text} from "./Rating.style";
import {ReactComponent as RateIcon} from "../../icons/rate_star.svg";

const Rating = (props) => {
    return (
       <Wrapper>
           <Text>{props.children}</Text>
           <RateIcon/>
       </Wrapper>
    );
};

export default Rating;